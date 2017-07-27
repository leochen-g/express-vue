/**
 * Created by geng on 2017/7/26.
 * Api数据接口
 */
var express = require('express');
var router = express.Router();
var control = require('../control/userControl')

/* GET home page. */
router.get('/user/resign',function (req,res) {
    if (req.method === 'POST') {
        var param = req.body
    } else {
        var param = req.query || req.params
    }
  control.insertUser(param,function (result) {
    res.send(result)
    res.end()
  })
})

module.exports = router;