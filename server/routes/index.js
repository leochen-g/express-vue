var express = require('express')
var router = express.Router()
var control = require('../control/userControl')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'nae'})
})
// 注册用户接口
router.all('/user/resign', function (req, res, next) {
  if (!req.body.user) res.send({result: false, msg: '获取数据失败，请稍后重试'})
  if (req.method === 'POST') {
    var param = req.body
  } else {
    var param = req.query || req.params
  }
  control.insertUser(param, function (result) {
    res.send(result)
    res.end()
  })
})
// 用户注册接口
router.post('/user/resign',function (req, res, next) {
  control.userResign(req, res, next)
})
// 用户登录接口
router.post('/user/login', function (req, res, next) {
  control.userLogin(req, res, next)
})
module.exports = router
