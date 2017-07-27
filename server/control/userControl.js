/**
 * Created by geng on 2017/7/26.
 * user控制器
 */
// 引入mysql模块
var mysql= require('mysql')
// 引入mysql配置文件
var db = require('../config/db')
// 引入主要的sql语句
var sqlMap= require('../sqlMap/userSqlMap')
// 引入错误信息
var errMessage = '../config/errMessage'
// 创建连接
var pool = mysql.createPool(db)


module.exports = {
    query: function (sql,data, callback) {
      pool.getConnection(function (err, connection) {
        connection.query(sql,data,function (err, rows) {
          callback(err, rows)
          connection.release()
        })
      })
    },
  //用户注册控制单元
    insertUser: function(param, callback) {
      // 判断是否传参
        if (!param.user) callback({result: false, msg: '获取数据失败，请稍后重试'})
      // 首先判断数据库中是否存在相同用户名
            pool.query(sqlMap.user.getUser, [param.user,param.psd],function (err, result) {
                if(err) {
                    return errMessage.showErr(err)
                } else {
                    if (result.length === 0){
                      // 注册用户
                      pool.query(sqlMap.user.insert,[param.user,param.psd],function (err, result) {
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
}
