/**
 * Created by geng on 2017/7/26.
 * user控制器
 */
import mysql from 'mysql'
import db from '../config/db'
import sqlMap from '../sqlMap/userSqlMap'

var pool = mysql.createPool(db)
pool.connect()

module.exports = {
    insertUser: (err, connection) => {
        if(err) return err.showErrors(err)
        connection.getConnection((err, connection) => {
            if(err) return err.showErrors(err)
            connection.query(sqlMap.user.add, (err, result) => {
                if(err) return err.showErrors(err)
                return result
                connection.release()
            })
        })
    }
}
