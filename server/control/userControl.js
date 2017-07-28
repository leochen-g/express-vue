/**
 * Created by geng on 2017/7/26.
 * user控制器
 */
// 引入mysql模块
var mysql = require('mysql')
// 引入mysql配置文件
var db = require('../config/db')
// 引入主要的sql语句
var sqlMap = require('../sqlMap/userSqlMap')
// 引入错误信息
var errMessage = '../config/errMessage'
// 创建连接池，提高性能
var pool = mysql.createPool(db)

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

module.exports = {
  query: function (sql, data, callback) {
    pool.getConnection(function (err, connection) {
      connection.query(sql, data, function (err, rows) {
        callback(err, rows)
        connection.release()
      })
    })
  },
  // 用户注册控制单元
  insertUser: function (param, callback) {
    // 判断是否传参
    if (!param.user) callback({result: false, msg: '获取数据失败，请稍后重试'})
    // 首先判断数据库中是否存在相同用户名
    pool.query(sqlMap.user.getUser, [param.user, param.psd], function (err, result) {
      if (err) {
        return errMessage.showErr(err)
      } else {
        if (result.length === 0) {
          // 注册用户
          pool.query(sqlMap.user.insert, [param.user, param.psd], function (err, result) {
            if (err) {
              throw err
            } else {
              callback({result: true, msg: '注册成功'})
            }
          })
        } else {
          callback({result: false, msg: '注册失败'})
        }
      }
    })
  },
  // 用户注册单元
  userResign: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      var param = req.body
      if (!param.body.user || !param.body.psd) {
        res.json({
          result: false,
          msg: '获取数据失败,请稍后重试'
        })
      } else {
        connection.query(sqlMap.user.getUser, [param.user, param.psd], function (err, result) {
          if (err) {
            return errMessage.showErr(err)
          } else {
            if (result.length === 0) {
              // 注册用户
              pool.query(sqlMap.user.insert, [param.user, param.psd], function (err, result) {
                if (err) {
                  throw err
                } else {
                  callback({result: true, msg: '注册成功'})
                }
              })
            } else {
              callback({result: false, msg: '注册失败'})
            }
          }
        })
      }
    })
  },
  // 用户登录单元
  userLogin: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      var param = req.body
      connection.query(sqlMap.user.getUser, [param.user, param.psd], function (err, result) {
        if (result.length === 0) {
          result = {
            result: false,
            msg: '用户不存在'
          }
        } else {
          result = {
            result: true,
            msg: '登录成功'
          }
        }
        jsonWrite(res, result)
        connection.release()
      })
    })
  }
}
