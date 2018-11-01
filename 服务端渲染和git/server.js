const express=require("express");
let server=express();
server.listen(8080);
// 配置静态资源   和1.html拼接得到template/ejs/css/1.css可以访问css
// server.use(express.static("template/ejs/"))
let index=require('./router/index.js')
server.use('/index',index)
let artical=require('./router/artical.js')
index.use('/artical',artical)
let user=require('./router/user.js')
artical.use('/user',user)