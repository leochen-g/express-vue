/**
 * Created by geng on 2017/7/27.
 */
 module.exports = {
   errCode: {
   },
   errSql: {
     notable: '数据库不存在,链接失败',
     needTableName: '数据库不存在'
   },
   showErr: function (err) {
     console.dir(err)
   }
 }