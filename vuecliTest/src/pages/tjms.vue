<template>
<div class="tjmsw d-flex mt-4">
  <div class="w-100 float-left tjmscen">
    <div class="bg-tjms">
      <ul>
        <span class="float-left">推荐民宿</span>
        <li class="bg-tjmsdidian" :class="{'sanjiao':isactive1}" @mouseover="jsj(0)">北京</li>
        <li class="bg-tjmsdidian" :class="{'sanjiao':isactive}" @mouseover="jsj(1)">沈阳</li>
        <!--<li class="bg-tjmsdidian" :class="{'sanjiao':isactive[1]}" @mouseover="jsj(1)">天津</li>-->
        <!--<li class="bg-tjmsdidian" :class="{'sanjiao':isactive[1]}" @mouseover="jsj(1)">青岛</li>-->
        <!--<li class="bg-tjmsdidian" :class="{'sanjiao':isactive[1]}" @mouseover="jsj(1)">济南</li>-->
        <!--<li class="bg-tjmsdidian" :class="{'sanjiao':isactive[1]}" @mouseover="jsj(1)">秦皇岛</li>-->
        <!--<li class="bg-tjmsdidian" :class="{'sanjiao':isactive[1]}" @mouseover="jsj(1)">烟台</li>-->
        <li class="float-right"><a href="##" class="color">全部&nbsp;<span>&gt;</span></a></li>
      </ul>
    </div>
    <div class="w-100 float-left bg-white pt-2 pb-2 pl-3" v-if="this.isactive1==true">
      <div class="float-left pr-2" v-for="item in tjmsdatabj">
        <a :href="item.tjmsurl">
        <div class="float-left position-relative">
          <img :src="item.tjmsimg" alt="" class="tjmsimg">
          <img :src="item.tjmsimg_1" alt="" class="tjmstouxiang">
        </div>
        <div class="">
          <div class="tjms-title text-left pt-3 pb-2">{{item.tjmstitle}}}</div>
          <div class="text-left tjmsinfo">
            <span>{{item.tjmsinfo}}|</span>
            <span>{{item.tjmsdizhi}}</span>
          </div>
          <div class="text-left tjmsqian pt-2 pb-3"><small>￥</small>{{item.tjmsqian}}</div>
        </div>
        </a>
      </div>
    </div>
    <div class="w-100 float-left bg-white pt-2 pb-2 pl-3" v-if="this.isactive==true">
      <div class="float-left pr-2" v-for="item in tjmsdatasy">
        <a :href="item.tjmsurl">
          <div class="float-left position-relative">
            <img :src="item.tjmsimg" alt="" class="tjmsimg">
            <img :src="item.tjmsimg_1" alt="" class="tjmstouxiang">
          </div>
          <div class="">
            <div class="tjms-title text-left pt-3 pb-2">{{item.tjmstitle}}}</div>
            <div class="text-left tjmsinfo">
              <span>{{item.tjmsinfo}}|</span>
              <span>{{item.tjmsdizhi}}</span>
            </div>
            <div class="text-left tjmsqian pt-2 pb-3"><small>￥</small>{{item.tjmsqian}}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:"tjms",
  data(){
    return {
      tjmsdatabj:[
        {tjmsurl:"https://phoenix.meituan.com/housing/1147747/?",tjmsimg:require("../assets/images/minshu1.jpg"),tjmsimg_1:require("../assets/images/minshu1_1.jpg"),tjmstitle:"东直门地铁口,北欧风格一居,步行可到簋街/三里屯,42寸大电视,空气净化器,厨具齐全,高空观景房",tjmsinfo:"居室·可住4人",tjmsdizhi:"工体/三里屯/东直门",tjmsqian:335},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu2.jpg"),tjmsimg_1:require("../assets/images/minshu2_1.jpg"),tjmstitle:"交大西直门地铁人民医院动物园海洋馆附近两居",tjmsinfo:"整套2居室·可住6人",tjmsdizhi:"西直门/动物园",tjmsqian:498},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu3.jpg"),tjmsimg_1:require("../assets/images/minshu3_1.jpg"),tjmstitle:"紧邻地铁6号线通州北关站-半小时直达南锣鼓巷，后海",tjmsinfo:"整套1居室·可住4人",tjmsdizhi:"果园环岛/通州区",tjmsqian:320},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu4.jpg"),tjmsimg_1:require("../assets/images/minshu2_1.jpg"),tjmstitle:"人民大学地铁4号线邻近中关村北大清华一居（提供溜娃神器手推车）",tjmsinfo:"整套1居室·可住3人",tjmsdizhi:"中关村/五道口",tjmsqian:438},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu5.jpg"),tjmsimg_1:require("../assets/images/minshu5_1.jpg"),tjmstitle:"地铁四号线  天街 欧式风格 优雅小复式",tjmsinfo:"整套1居室·可住5人",tjmsdizhi:"大兴农业生态观光区",tjmsqian:268},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu6.jpg"),tjmsimg_1:require("../assets/images/minshu6_1.jpg"),tjmstitle:"3近天安门故宫王府井北京站同仁医院经典北欧风",tjmsinfo:"整套1居室·可住5人",tjmsdizhi:"前门/天坛",tjmsqian:399},
      ],
      tjmsdatasy:[
        {tjmsurl:"https://phoenix.meituan.com/housing/1147747/?",tjmsimg:require("../assets/images/minshu7.jpg"),tjmsimg_1:require("../assets/images/minshu7_1.jpg"),tjmstitle:"云福阁公寓 – 名仕经典，沈阳师范大学旁，近地铁，密码锁自助入住。",tjmsinfo:"1居室·可住2人",tjmsdizhi:"四台子",tjmsqian:88},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu8.jpg"),tjmsimg_1:require("../assets/images/minshu8_1.jpg"),tjmstitle:"【不忘初心,方得始终.】沈阳站太原街万达广场 日式榻榻米巨幕投影 可加住至4人",tjmsinfo:"整套1居室·可住4人",tjmsdizhi:"万达广场",tjmsqian:138},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu9.jpg"),tjmsimg_1:require("../assets/images/minshu9_1.jpg"),tjmstitle:"弓匠精品公寓 特色艺术一人间",tjmsinfo:"整套1居室·可住4人",tjmsdizhi:"",tjmsqian:68},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu10.jpg"),tjmsimg_1:require("../assets/images/minshu10_1.jpg"),tjmstitle:"紫伊网红。超大薰衣草背景墙紫色主题房间。朝向好，全套家电。智能网络电视，可以智能投屏。",tjmsinfo:"整套1居室·可住3人",tjmsdizhi:"道义",tjmsqian:68},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu11.jpg"),tjmsimg_1:require("../assets/images/minshu11_1.jpg"),tjmstitle:"道义正良沈师地铁口欢乐颂公寓 温馨大床房",tjmsinfo:"整套1居室·可住2人",tjmsdizhi:"四台子",tjmsqian:78},
        {tjmsurl:"##",tjmsimg:require("../assets/images/minshu12.jpg"),tjmsimg_1:require("../assets/images/minshu6_1.jpg"),tjmstitle:"辽宁大学 北行 北站 四院 大开间温馨浪漫双床房密码锁",tjmsinfo:"整套2居室·可住4人",tjmsdizhi:"北行",tjmsqian:158},
      ],
      isactive1:true,
      isactive:false,
    }
  },
  methods:{
    jsj(i){
     if(i==0){
       this.isactive=false;
       this.isactive1=true;
     }else{
       this.isactive1=false;
       this.isactive=true;
     }
    }
  }
}
</script>
<style>
  .tjmsw{width:1150px;margin:0 auto;border:1px solid #e5e5e5;border-top-left-radius:4px;border-top-right-radius:4px;}
  .tjmscen{width:100%;float:left;display:block;}
  .bg-tjms{background:linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);color:#fff;text-align:left;border-top-right-radius:4px;border-top-left-radius:4px;padding:10px;width:100%;float:left;}
  .bg-tjmsdidian{float:left;margin-left:25px;position:relative;font-size:14px;cursor:pointer;}
  .sanjiao:before{position:absolute;top:28px;left:8px;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:7px solid #fff;content:" ";width:2px;cursor:pointer;}
  .bg-tjms ul h6{line-height:22px;}
  .tjmsimg{width:367px;height:208px;float:left;border-radius:5px;}
  .tjmstouxiang{position:absolute;top:185px;left:305px;width:48px;height:48px;border:2px solid #fff;z-index:1;border-radius:40px;}
  .tjms-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:310px;color:#222;}
  .tjmsinfo{color:#999;font-size:12px;}
  .tjmsqian{color:#F60;font-weight:700;font-size:19px;}
  .color{color:#fff;}
  .color:hover{color:#fff;}
</style>
