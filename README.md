＃学习过程
把每天学习到的知识，整理总结到这里



推荐个原生  js 的练习题

http://fgm.cc/learn/ 

这个里面从简单的到难的 都有
我想这个练习题都能会  工作就没啥问题了

##1.1.1 parent js获取父级元素dom



jq  parent  获取的是夫级的DOM元素 并不是夫级对象
## 1.1.2 css 伪选择器
:first-letter   首字母 <br>
:first-line     首行<br>
:first-child    第一个元素<br>
:before         之前插入 要centent<br>
:after          之后插入 同上<br>
:nth-child(n)   第n个元素<br>
:nth-last-child(n)  倒数第n个元素<br>
:nth-of-type(n) 第n个元素 如果第二个元素是其他元素也生效<br>
:nth-of-type(n) 倒数第n个元素<br>


## 1.1.3 在控制台输出 给当前页面所有DOM加边框

> 仿照bilibili 一个星空的例子
> user.api.it120.cc
> 我再也不写后台端口了

## 1.1.4   发现bilibili 弹幕接口
https://api.bilibili.com/x/v1/dm/list.so?oid=143503300

oid  是视频请求的第一个请求的 oid

## 1.1.5 默哀时 发下了网站全都灰灰的了  

> 发下了css 新元素

> -webkit-filter: grayscale();

```css
  -webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;
```


 > 主要改造 word.html 
 ```js
  //对象属性不能定义 原型属性
  // 实现了 Object 支持indexOf 
  let obj = {a:1,b:2,c:3}
  Object.keys(obj)  // 这样返回的是一个数组
  Object.keys(obj).indexOf('b') // 1     
  'b' in obj // true 
 ```