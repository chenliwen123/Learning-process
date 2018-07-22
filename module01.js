function fn01() {                   //函数及函数名
    console.log("module01-fn01");//输出语句
}
function fn02() {                  //函数及函数名
    console.log("module01-fn02"); //输出语句
}
module.exports={              //暴露借口
    "fn01":fn01,
    "fn02":fn02
}