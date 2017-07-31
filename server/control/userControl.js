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
// json格式化
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
  // 用户注册单元
  userResign: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      var param = req.body
      if (!param) {
        res.json({result: false, msg: errMessage.errMsg.noData})
      } else {
        // 判断数据库中是否存在重复名
        connection.query(sqlMap.user.getUser, param, function (err, result) {
          if (err) {
            return res.json({result: false, msg: errMessage.errMsg.noData})
          } else {
            if (result.length === 0) {
              // 数据库不存在重复用户，注册用户
              pool.query(sqlMap.user.insert, param, function (err, result) {
                if (err) {
                  return res.json({result: false, msg: errMessage.errMsg.noData})
                } else {
                  result = {result: true, msg: '注册成功'}
                  jsonWrite(res, result)
                  connection.release()
                }
              })
            } else {
              result = {result: false, msg: '注册失败，用户名重复'}
              jsonWrite(res, result)
              connection.release()
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
