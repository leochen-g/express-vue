var express = require('express')
var router = express.Router()
var control = require('../control/userControl')


// 用户注册接口
router.post('/user/resign',function (req, res, next) {
  control.userResign(req, res, next)
})
// 用户登录接口
router.post('/user/login', function (req, res, next) {
  control.userLogin(req, res, next)
})
module.exports = router
