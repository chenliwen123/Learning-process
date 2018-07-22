var m1=require("./module01");  //用require的方法来接收module01所暴露的接口并赋值给m1
var m2=require("./module02");
/*m1=={
    "fn01":fn01
    "fn02":fn02
}
* */
m1.fn01();
m2.fn02();