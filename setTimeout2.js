/**
 * Created by web-01 on 2017/11/13.
 */
var t=new Date().getTime();

setTimeout(()=>{
    //计算一下实际延时事件毫秒数
    var now=new Date().getTime();
    console.log(now-t-1000);
},1000)