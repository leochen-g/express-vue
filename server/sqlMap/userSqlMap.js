/**
 * Created by geng on 2017/7/26.
 * 主要操作数据库语句
 */
var sqlMap = {
    user: {
        add: 'insert into user(id,user,psd) values (0,?,?)'
    }
}
module.exports = sqlMap