/**
 * Created by geng on 2017/7/26.
 * Api数据接口
 */
import express from 'express'
import userControl from '../control/userControl'
const router = express.Route()

router.get('api/user/insert', (req, res) => {
    userControl.insertUser(function (result) {
        res.send(result)
        res.end
    })
})
