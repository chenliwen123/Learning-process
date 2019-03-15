<template>
  <div class="content d-flex position-relative">
    <div class="float-left bg-luse">
      <ul>
        <li>全部分类</li>
        <li @mousemove="erjimenu=true" @mouseout="erjimenu=false">美食</li>
        <li>外卖</li>
        <li>酒店</li>
        <li>榛果民宿</li>
        <li>猫眼电影</li>
        <li>飞机/火车票</li>
        <li>休闲娱乐/Ktv</li>
        <li>生活服务</li>
        <li>丽人/美发/医学美容</li>
        <li>结婚/婚纱摄影/婚宴</li>
        <li>亲子/儿童乐园/幼教</li>
        <li>运动健身/健身中心</li>
        <li>家装/建材/家居</li>
        <li>学习培训/音乐培训</li>
        <li>医疗健康/宠物/爱车</li>
        <li>酒吧/密室逃脱</li>
      </ul>
      <div class="erjimenu float-left position-absolute" v-show="erjimenu"  @mousemove="erjimenu=true">
        <div class="float-left p-3 w-100">
          <div class="w-100 conten float-left">
            <div class="float-left">美食</div>
            <div class="float-right">更多&gt;</div>
          </div>
          <ul class="w-100 float-left erjimenu_cen mt-2">
            <li v-for="(itme,index) in meishi" :key="index"><a href="itme.url">{{itme.title}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="float-left bg-right ml-2">
      <div class="nav_dh float-left">
        <ul>
          <li>美团外卖</li>
          <li>猫眼电影</li>
          <li>美团酒店</li>
          <li>民宿/公寓</li>
          <li>商家入驻</li>
          <li>美团公益</li>
        </ul>
      </div>
      <div class="w-100 float-left mt-2">
        <div class="text-left float-left overflow-hidden position-relative banner_wh" @mouseover="dingshiqit()" @mouseout="dingshiqio()">
          <div class="float-left position-absolute banner" :style="{opacity:touming[0]?1:0}">
            <a href="##" ><img src="../assets/images/banner.jpg" alt="" class="banner_image"></a>
          </div>
          <div class="float-left position-absolute banner" :style="{opacity:touming[1]?1:0}">
            <a href="##" ><img src="../assets/images/banner1.jpg" alt="" class="banner_image"></a>
          </div>
          <div class="float-left position-absolute banner" :style="{opacity:touming[2]?1:0}">
            <a href="##" ><img src="../assets/images/banner2.jpg" alt="" class="banner_image"></a>
          </div>
          <div class="float-left position-absolute banner" :style="{opacity:touming[3]?1:0}">
            <a href="##" ><img src="../assets/images/banner3.jpg" alt="" class="banner_image"></a>
          </div>
          <div class="float-left position-absolute banner" :style="{opacity:touming[4]?1:0}">
            <a href="##" ><img src="../assets/images/banner4.jpg" alt="" class="banner_image"></a>
          </div>
          <div class="text1" @click="bannerl()">&lt;</div>
          <div class="pra1" @click="bannerr()">&gt;</div>
          <ul class="position-absolute banner_dian">
            <li :class="touming[0]?'item':''"></li>
            <li :class="touming[1]?'item':''"></li>
            <li :class="touming[2]?'item':''"></li>
            <li :class="touming[3]?'item':''"></li>
            <li :class="touming[4]?'item':''"></li>
          </ul>
        </div>
        <div class="float-left ml-2">
          <img src="../assets/images/xiuxian.jpg" alt="" style="widht:150px;height:240px;">
        </div>
        <div class="float-left ml-2 bg-white bg-sign">
          <div class="mt-4"><img src="../assets/images/avatar.jpg" alt="" class="avatar"></div>
          <div class="nihao">Hi！你好</div>
          <div class="zuce">注册</div>
          <div class="denglu">立即登录</div>
        </div>
      </div>
      <div class="float-left mt-2">
        <div class="float-left"><img src="../assets/images/zhujiudian.png" alt="" style="widht:270px;height:165px;"></div>
        <div class="ml-2 float-left"><img src="../assets/images/gandiaowuqu.jpg" alt=""></div>
        <div class="float-left ml-2"><img src="../assets/images/wshisj.jpg" alt="" style="width:150px;height:165px;"></div>
        <div class="appban ml-2">
          <div class="mt-3"><img src="../assets/images/erweima.png" alt="" style="width:95px;height:95px;"></div>
          <p>美团APP手机版</p>
          <p class="chwl"><span>1元起</span>吃喝玩乐</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"topfz",
  data(){
    return{
      touming:[true,false,false,false,false],
      dingshiqi:true,
      meishi:[
        {title:"代金券",url:"##"},
        {title:"甜点饮品",url:"##"},
        {title:"火锅",url:"##"},
        {title:"自助餐",url:"##"},
        {title:"小吃快餐",url:"##"},
        {title:"日韩料理",url:"##"},
        {title:"西餐",url:"##"},
        {title:"聚餐宴请",url:"##"},
        {title:"烧烤烤肉",url:"##"},
        {title:"东北菜",url:"##"},
        {title:"川湘菜",url:"##"},
        {title:"江浙菜",url:"##"},
        {title:"香锅烤鱼",url:"##"},
        {title:"粤港菜",url:"##"},
        {title:"中式烧烤/烤串",url:"##"},
        {title:"西北菜",url:"##"},
        {title:"咖啡酒吧茶馆",url:"##"},
        {title:"云贵菜",url:"##"},
        {title:"东南亚菜",url:"##"},
        {title:"海鲜",url:"##"},
        {title:"素食",url:"##"},
        {title:"台湾/客家菜",url:"##"},
        {title:"创意菜",url:"##"},
        {title:"汤/粥/炖菜",url:"##"},
        {title:"新疆菜",url:"##"},
        {title:"京菜鲁菜",url:"##"},
        {title:"其他美食",url:"##"},
      ],
      erjimenu:false,
    }
  },
  methods:{
    bannerr(){
      if(this.touming[this.touming.length-1]==true){
        this.$set(this.touming,this.touming.length-1,false);
        this.$set(this.touming,0,true);
        return false;
      }
      for(let i=this.touming.length;i>=0;i--){
        if(this.touming[i]==true){
          this.$set(this.touming,i,false);
          this.$set(this.touming,i+1,true);
          return false;
        }
      }
    },
    bannerl(){
      if(this.touming[0]==true){
        this.$set(this.touming,0,false);
        this.$set(this.touming,this.touming.length-1,true);
        return false;
      }
      for(let i=this.touming.length;i>=0;i--){
        if(this.touming[i]==true){
          this.$set(this.touming,i,false);
          this.$set(this.touming,i-1,true);
          return false;
        }
      }
    },
    dingshiqit(){
      clearInterval(this.dingshiqi);
    },
    dingshiqio(){
      this.dingshiqi= setInterval(() => {
        this.bannerr();
      },2000)
    }
  },
  mounted:function () {
    this.dingshiqi= setInterval(() => {
      this.bannerr();
    },2000)
  }
}
</script>
<style>
  .erjimenu_cen li{float: left;font-size:12px;margin-right:20px;line-height:25px;}
  .erjimenu .conten{border-bottom:1px solid #e5e5e5;line-height:45px;}
  .conten div:nth-child(1){color:#000;}
  .conten div:nth-child(2){font-size: 12px;}
  .topbg{background: #F8F8F8;color:#000; width:1150px !important;margin:0 auto;}
  .jiaheight{padding-bottom:35px;}
  .content{width:1150px;margin:0 auto;z-index:100;}
  .bg-luse{background:linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);color:#fff;width:530px;margin-top:-50px;}
  .bg-luse>ul li{text-align:left;padding:0 0 0 20px;font-size:13px;line-height:25px;position:relative;}
  .bg-luse>ul li:before{position:absolute;right:8px;content:'>';}
  .bg-luse>ul li:nth-child(1):before{position:absolute;right:4px;content:' ';}
  .bg-luse>ul li:nth-child(1):hover{background:transparent;}
  .bg-luse>ul li:hover{background:rgba(255,255,255,.2);cursor:pointer;}

  .bg-luse>ul li:nth-child(1){margin:15px 0 20px 0;font-size:15px;}
  .nav_dh ul li{width:70px;;float:left;margin: 0 20px;line-height:45px;font-weight:700;cursor:pointer;height:50px;}
  .nav_dh ul li:nth-child(1):hover{color:#fbc700;}
  .nav_dh ul li:nth-child(2):hover{color:#ed1e24;}
  .nav_dh ul li:nth-child(3):hover{color:#ed1e24;}
  .nav_dh ul li:nth-child(4):hover{color:#FDC411;}
  .nav_dh ul li:nth-child(5):hover{color:#31BBAC;}
  .nav_dh ul li:nth-child(6):hover{color:#f04d4e;}
  .bg-right{margin-top:-50px;}
  .banner_image{width:550px;text-align:left;float:left;}
  .banner a{display:block;width:550px;height:241px;float:left;}
  .bg-sign{border:1px solid #e5e5e5;width:228px;height:238px;}
  .avatar{width:47px;height:47px;border-radius:50%;border:4px solid #E5E5E5;}
  .nihao{line-height:40px;}
  .zuce{width:110px;border:1px solid #e5e5e5;border-radius:20px;padding:5px 10px;margin: 0 auto 15px auto;transition: all 0.3s;cursor: pointer;}
  .zuce:hover{background:#f6f6f6;}
  .denglu{width:110px;border:1px solid #e5e5e5;border-radius:20px;padding:5px 10px;margin: 0 auto 15px auto;transition:all 0.3s;cursor:pointer;}
  .denglu:hover{background:#f6f6f6;}
  .appban{width:230px;height:165px;float:left;border:1px solid #e5e5e5;background:#fff;}
  .appban p{padding:0;margin:0;}
  .chwl{font-size:12px;padding:0;margin:0;}
  .chwl span{color:#f00000;}
  .banner{left:0px;width:550px;float:left;opacity:0;transition:all 0.5s;}
  .banner_wh{width:550px;height:241px;}
  .banner_wh:hover .text1{opacity:1;}
  .banner_wh:hover .pra1{opacity:1;}
  .banner_dian{bottom:10px;left:42%}
  .banner_dian li{width:8px;height:2px;background:rgba(255,255,255,0.2);float:left;margin-right:10px;}
  .banner_dian li.item{background:rgba(255,255,255,0.9);}
  .text1{position:absolute;left:10px;top:40%;background:rgba(0,0,0,0.5);border-radius:40px;width:40px;height:40px;color:#fff;font-size:27px;padding-left:8px;cursor:pointer;opacity:0;transition: all 0.2s;}
  .pra1{position:absolute;right:10px;top:40%;background:rgba(0,0,0,0.5);border-radius:40px;width:40px;height:40px;color:#fff;font-size:27px;padding-left:12px;cursor:pointer;opacity:0;transition:all 0.2s;}
  .erjimenu{width:400px;height:415px;top:7px;left:195px;background:#fff;z-index: 102;color:#999;}
</style>
