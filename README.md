# express-vue

最近一直在看vue和express相关的资料，也做了几个基于vue的项目，但由于接口都是爬取别人定义好的，这个令我很不开心，我就开始着琢磨怎么写自己的喜欢的接口获取自己掌握的数据；说干就干吧，做一个最简单的注册和登录结合的界面，前台页面用vue渲染，后台页面用express写接口；

<div style="color: red">
注：本项目已经实现了前端和后端的热更新，可下载下来作为基本的单元进行扩展开发，虽然用的方法比较笨，前端在8080端口运行，后端接口运行在3000端口，我在后端设置了可以进行跨域访问，也可在前端设置代理进行跨域访问，但是作为从前端开始了解后端开发的而言，开两个端口在前期也没有什么大碍了，而且可以加快对后端接口开发的理解
</div>

技术栈： nodejs+ express + mysql + es6/5 + vue + element-ui

前提:假设你已经建好了本地Mysql数据库,不会的可以百度PHPstudy配置数据库环境，我建立的数据库名为myapp 这个都可以自行配置，不在这里进行赘述

项目目录：

客户端目录
<div align=center><img width="550" height="600" src="http://image.bloggeng.com/gitblog/vue.jpg"/></div>
</br>

服务端目录：

 <div align=center><img width="550" height="600" src="http://image.bloggeng.com/gitblog/express.jpg"/></div>

项目运行：
```
 git clone git@github.com:gengchen528/express-vue.git
 cd express-vue
 cd server
 npm install
 npm start
 
 新开一个命令行窗口
 
 cd express-vue
 cd client
 npm install
 npm run dev
 
 访问：http://localhost:8080/#/login 
 
 ```
效果演示：

前台：
<div align=center><img width="550" height="400" src="http://image.bloggeng.com/gitblog/resign.jpg"/></div>

数据库： 
<div align=center><img width="550" height="400" src="http://image.bloggeng.com/gitblog/mysql.jpg"/></div>


详细教程请移步：[传送门]()