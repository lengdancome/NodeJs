/**
 * Created by web-01 on 2017/11/13.
 */
var t=new Date().getTime();

setTimeout(()=>{
    //����һ��ʵ����ʱ�¼�������
    var now=new Date().getTime();
    console.log(now-t-1000);
},1000)