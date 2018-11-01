const ejs=require("ejs");
// test.html
ejs.renderFile('./template/ejs/test.html',{
    str:'快吃饭了！！',
    HL:'<b>反正我不是标签</b>',
    arr:[1,2,3,4,5],
    // 先考虑当前文件位置  跟test.html相比
    fter:'./components/footer.html'
}).then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err);
})