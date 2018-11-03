
window.onload=()=>{
    let change1=document.getElementById("change1");
    let total=document.getElementById("total");
    let radioArr=document.getElementsByName("hhh");
    let list=document.getElementById("list");
    // 创建类 
    class Mt{
        // 构造器 先给个默认值
        constructor(title="",total=0,status=0,list=[]){
            // title===>input change
            this.title=title;
            //目标总数
            this.total=total;
            // 状态(所有目标、已完成、未完成)
            this.status=status;
            // 数据
            this.list=list;
        }
        change(){
            var ss="";
            if(event.keyCode==13){
                // this目前指的是标签 ，但是它应该指的mt/所以要绑定mt
                this.title=event.target.value;
                // 清空
                event.target.value="";
                // 0是所有
                // 1 是完成
                // 2是未完成
                this.list.push({
                    el:`
                    <div status="${0}">
                        <div index=${this.list.length}  onclick='ss.upStatus()' style="width:20px;height:20px;display: inline-block;background-color: #ccc;" status="2"></div>
                        <p>${this.title}</p>
                        <b index=${this.list.length} onclick='ss.delList()'>x</b>
                    </div>`,
                    status:2
                })
                // 加完数据后 加载页面render
                this.render(this.list);
            }
        }
        // 更新页面
        render(l){
            //更新 list
            // 数组转字符串
            // 递归(函数自己调用自己)，首先要有条件，来判断什么时候结束。i>length就会显示undefined
            function listStr(i,arr,str){
                if(typeof arr[i]=="undefined"){
                    // 直到undefined
                    return str;
                }else{
                    str+=arr[i].el;
                    i++;
                    return listStr(i,arr,str);
                }
            }
            list.innerHTML=listStr(0,l,"");
        }
        // 更改状态
        upStatus(){
            // 获取status
            let s=event.target.getAttribute("status");
            // 获取index
            let index=event.target.getAttribute("index");
            // 点击状态改变。等于2时变成1，等于1时变成2
            
            let status=s==2?1:2;
            this.list[Number(index)].status=status;
            // 重新设置状态值
            event.target.setAttribute("status",status);
            // 点击方块改变颜色
            event.target.style.backgroundColor=s==1?'#ccc':'gold';
            
            // console.log(status);
        }
        // 删除
        delList(){
            // 先获取index
            let index=event.target.getAttribute("index");
            //然后让el内容为空
            this.list[Number(index)].el="";
            // 更新list列表
            this.render(this.list);
        }
        // 按钮切换
        radioChange(){
            //1. 获取value
            let val=event.target.value;
            //2.value ==>list过滤
            // filter
            let arr =this.list.filter(
                (value)=>{
                    return val==0||val==value.status
                }
            );
            // console.log(arr);
            // 3.过滤后的list，用render渲染
            this.render(arr);

        }
    }
    
    // 实例化
    ss=new Mt();
    // console.log(ss)
    // 第一个坑点 要绑定mt
    // change键盘按下事件
    change1.onkeydown=ss.change.bind(ss);
    // 绑定事件
    for(let i=0;i<radioArr.length;i++){
        radioArr[i].onchange=ss.radioChange.bind(ss);
    }
}