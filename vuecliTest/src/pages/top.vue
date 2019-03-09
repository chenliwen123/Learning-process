<template>
  <div clas class="top topbg">
  <div class="d-flex w100 xiang">
    <div class="topleft">
      <span></span>{{didian}}<a href="##" class="qhcs ml-1">切换城市</a> <a href="##" class="lidengl ml-5">立即登录</a><a href="##" class="zhuce ml-2">注册</a>
    </div>
    <div class="ml-auto flex-row-reverse d-flex topright">
      <div :class="['pr-2','pl-2',menuclass4]" @mouseover="jingguohover4" @mouseout="jingguomove4">
        <a href="##">网站导航</a>
        <div :class="['wdmtlist','width100','pl-5','pr-5','pt-3','pb-3',menuclass4]" v-show="xianshi4">
          <div class="jdly float-left">
            <dl>
              <dt>酒店旅游</dt>
              <dd>国际机票</dd>
              <dd>过车票</dd>
              <dd>榛果民宿</dd>
              <dd>经济型酒店</dd>
              <dd>主题酒店</dd>
              <dd>商务酒店</dd>
              <dd>公寓</dd>
              <dd>豪华酒店</dd>
              <dd>客栈</dd>
              <dd>青年旅社</dd>
              <dd>度假酒店</dd>
              <dd>别墅</dd>
              <dd>农家院</dd>
            </dl>
          </div>
          <div class="cms float-left">
            <dl>
              <dt>吃美食</dt>
              <dd>烤鱼</dd>
              <dd>特色小吃</dd>
              <dd>烧烤</dd>
              <dd>自助餐</dd>
              <dd>火锅</dd>
              <dd>代金券</dd>
            </dl>
          </div>
          <div class="float-left kdy">
            <dl>
              <dt>看电影</dt>
              <dd>热映电影</dd>
              <dd>热门影院</dd>
              <dd>热映电影口碑榜</dd>
              <dd>最受期待电影</dd>
              <dd>国内票房榜</dd>
              <dd>北美票房榜</dd>
              <dd>电影排行榜</dd>
            </dl>
          </div>
          <div class="float-left sjyy">
            <dl>
              <dt>手机应用</dt>
              <dd><a href="##"><img src="../assets/images/dianping.png" class="img-width" alt=""></a></dd>
              <dd><a href="##"><img src="../assets/images/maoyan.png" class="img-width" alt=""></a></dd>
              <dd><a href="##"><img src="../assets/images/meituan.png" class="img-width" alt=""></a></dd>
              <dd><a href="##"><img src="../assets/images/waimai.png" class="img-width" alt=""></a></dd>
              <dd><a href="##"><img src="../assets/images/zhenguo.png" class="img-width" alt=""></a></dd>
            </dl>
          </div>
        </div>
      </div>
      <div :class="['pr-2','pl-2','xiang',menuclass3]" @mouseover="jingguohover3" @mouseout="jingguomove3">
        <a href="##">商家中心</a>
        <ul :class="['wdmtlist','w-160',menuclass3]" v-show="xianshi3">
          <li>登录商家中心</li>
          <li>美团智能收银</li>
          <li>我想合作</li>
          <li>手机免费开店</li>
          <li>餐饮代理商招募</li>
          <li>商家申请开票</li>
          <li>免费合作美团排队</li>
        </ul>
      </div>
      <div class="pr-2 pl-2">手机APP</div>
      <div :class="['pr-2','pl-2','xiang',menuclass]" @mouseover="jingguohover" @mouseout="jingguomove">
        <a href="##">我的美团</a>
        <ul :class="['wdmtlist','w-100',menuclass]" v-show="xianshi">
          <li>我的订单</li>
          <li>我的收藏</li>
          <li>抵用券</li>
          <li>账户设置</li>
        </ul>
      </div>

    </div>
  </div>
  </div>
</template>
<script>
export default {
  name:"index",
  data(){
    return {
      /*
      didian       当前定位的城市
      menuclass1    右侧顶部过度效果
      listclass    右侧菜单鼠标过度的效果
       */
      didian:"大连",
      menuclass:"",
      menuclass3:"",
      menuclass4:"",
      xianshi:"",
      xianshi3:"",
      xianshi4:"",
    }
  },methods:{

    jingguohover(){
      //这个函数是控制“我的美团”菜单显示
      this.menuclass="wdmt";if(this.menuclass=="wdmt")this.xianshi=true;
      },
    jingguomove(){
      //这个函数是控制“我的美团”菜单隐藏
      this.menuclass="";if(this.menuclass=="")this.xianshi=false;},
    jingguohover3(){
    this.menuclass3="wdmt";if(this.menuclass3=="wdmt")this.xianshi3=true;
},
jingguomove3(){
  //这个函数是控制“我的美团”菜单隐藏
  this.menuclass3="";if(this.menuclass3=="")this.xianshi3=false;},
    jingguohover4(){
      this.menuclass4="wdmt";if(this.menuclass4=="wdmt")this.xianshi4=true;
    },
    jingguomove4(){
      //这个函数是控制“我的美团”菜单隐藏
      this.menuclass4="";if(this.menuclass4=="")this.xianshi4=false;},
  }
}
</script>
<style>
  a:hover{text-decoration:none;}
  ul{list-style:none;padding:0;margin:0;}
  dd:hover{color:#31BBAC;}
  .qhcs{color:#000;border:1px #ddd solid;border-radius:5px;padding:2px;}
  .qhcs:hover{color:#31BBAC;text-decoration:none;}
  .topleft{font-size:0.8rem;line-height:3rem;}
  .topright{font-size:0.8rem;line-height:3rem;}
  .lidengl{color:#31BBAC;}
  .lidengl:hover{color:#31BBAC;}
  .zhuce{color:#000;}
  .zhuce:hover{color:#31BBAC;}
  .topright div a{cursor:pointer;color:#999;}
  .wdmt{background:#fff;box-shadow:0px 10px 10px 2px #ddd;}
  .wdmt li:hover{color:#31BBAC;}
  .xiang{position:relative;}
  .wdmtlist{padding:0;margin:0;line-height:2rem;cursor:pointer;color:#999;position:absolute;top:45px;right:0;box-sizing:content-box;
    border-bottom-left-radius:3px;border-bottom-right-radius:3px;z-index:100;}
  .w-160{width:160% !important;}
  .width100{width:calc(100% - 6rem);border-radius:3px;}
  .jdly{width:240px;margin-right:40px;}
  .jdly dt{margin-bottom:20px;color:#31BBAC;}
  .jdly dd{width:33.33%;float:left;line-height:1.5rem;}
  .cms{width:160px;border-radius:3px;margin-right:40px;}
  .cms dt{margin-bottom:20px;color:#31BBAC;}
  .cms dd{float:left;width:50%;line-height:1.5rem;}
  .kdy{width: 90px;float:left; margin-right:40px;}
  .kdy dt{margin-bottom:20px;color:#31BBAC;}
  .kdy dd{float:left;width:100%;line-height:1.5rem;}
  .sjyy{width:420px;text-align:center;}
  .sjyy dt{margin-bottom:20px;color:#31BBAC;width:100%;text-align:center;}
  .sjyy dd{color:#31BBAC;width:20%;text-align:center;float:left;}
  .img-width{width:60px;height:60px;text-align:center;}
  @media screen and (max-width:1200px){
    .sjyy{width:250px;}
    .sjyy dd{color:#31BBAC;width:33.33%;text-align:center;float:left;}
    .sjyy dd:nth-child(5){color:#31BBAC;width:50%;text-align:center;float:left;}
  }
</style>
