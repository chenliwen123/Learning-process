var fs=require("fs");
/* fs.readFile("./a.txt","utf-8",function(err,data){
    if(err) throw err;
    //fs.writeFile("b.txt",data,function(err){ //覆盖写入 如果没有b.txt会新建b.txt writeFile覆盖写入
    // if (err) throw err;
    // })

    //fs.readFile("a.txt",data,function(err){if(err) throw err}); // readFile读取a.txt中的内容
   fs.appendFile("b.txt",data,function(err){ //  appendFile追加写入
        if (err) throw err;
    });
    fs.unlink("./b.txt",function (err) {  //unlink 删除文件
        if (err) throw ree;
    });
   fs.mkdir("c",function (err) {   //mkdir 创建新的文件夹
       if (err) throw err;
   });
});*/
fs.rename("a.txt","d.txt",function (err) {
    if (err) throw err;
});