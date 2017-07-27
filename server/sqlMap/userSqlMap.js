/**
 * Created by geng on 2017/7/26.
 * 主要操作数据库语句
 */
var sqlMap = {
  user: {
    insert: 'insert into user(user,psd) values (?,?)',
    getUser: 'select * from user where user = ? and psd = ?'
  }
}
module.exports = sqlMap