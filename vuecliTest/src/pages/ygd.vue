<template>
<div class="tjmsw d-flex mt-4">
  <div class="w-100 float-left tjmscen">
    <div class="bg_ygd">
      <ul>
        <span class="float-left">有格调</span>
        <li class="bg-tjmsdidian" :class="{'sanjiao':isactive[0]}" @mouseover="jsj(0)">全部</li>
        <li class="bg-tjmsdidian" :class="{'sanjiao':isactive[1]}" @mouseover="jsj(1)">约会聚餐</li>
        <li class="bg-tjmsdidian" :class="{'sanjiao':isactive[2]}" @mouseover="jsj(2)">丽人SPA</li>
        <li class="bg-tjmsdidian" :class="{'sanjiao':isactive[3]}" @mouseover="jsj(3)">电影演出</li>
        <li class="bg-tjmsdidian" :class="{'sanjiao':isactive[4]}" @mouseover="jsj(4)">品质旅游</li>
        <li class="float-right"><a href="##" class="color">全部&nbsp;<span>&gt;</span></a></li>
      </ul>
    </div>
    <div class="w-100 float-left bg-white pt-2 pb-2 pl-3 pr-3" v-show="this.isactive[0]==true">
      <div class="float-left p-2 contenter" v-for="item in tjmsdatabj">
        <a :href="item.tjmsurl">
        <div class="float-left position-relative">
          <img :src="item.tjmsimg" alt="" class="ygdsimg">
        </div>
        <div class="">
          <div class="tjms-title text-left pt-3 pb-2">{{item.tjmstitle}}</div>
          <div class="text-left tjmsinfo">
            <span>{{item.tjmsinfo}}</span>
          </div>
          <div class="text-left ygdqian pt-2"><small>￥</small><b>{{item.tjmsqian}}</b><span class="ygdmsj">门市价￥{{item.yuanjia}}</span><span class="float-right ygdmdidian">{{item.didian}}</span></div>
        </div>
        </a>
      </div>
    </div>
    <div class="w-100 float-left bg-white pt-2 pb-2 pl-3 pr-3" v-show="this.isactive[1]==true">
      <div class="float-left p-2 contenter" v-for="item in tjmsdatasy">
        <a :href="item.tjmsurl">
        <div class="float-left position-relative">
          <img :src="item.tjmsimg" alt="" class="ygdsimg">
        </div>
        <div class="">
          <div class="tjms-title text-left pt-3 pb-2">{{item.tjmstitle}}</div>
          <div class="text-left tjmsinfo">
            <span class="biandiandian">{{item.tjmsinfo}}</span>
          </div>
          <div class="text-left ygdqian pt-2"><small>￥</small><b>{{item.tjmsqian}}</b><span class="ygdmsj">门市价￥{{item.yuanjia}}</span><span class="float-right ygdmdidian">{{item.didian}}</span></div>
        </div>
        </a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:"ygd",
  data(){
    return {
      tjmsdatabj:[
        {tjmsurl:"https://www.meituan.com/meishi/52794220/",tjmsimg:require("../assets/images/gd1.jpg"),tjmstitle:"必胜客（香炉礁店）",tjmsinfo:"3份【工作日特惠午餐D022】1份",didian:"西岗区",tjmsqian:99,yuanjia:135},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd2.jpg"),tjmstitle:"任性牌榴芒蛋糕（龙畔锦城店）",tjmsinfo:"蛋糕4选1,约10英寸，圆形",didian:"西岗区",tjmsqian:125,yuanjia:218},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd3.jpg"),tjmstitle:"八喜冰淇淋蛋糕（速配店）",tjmsinfo:"10英寸双拼冰淇淋蛋糕一个，全城免费配送",didian:"周水子",tjmsqian:139,yuanjia:308},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd4.jpg"),tjmstitle:"糕速烘焙生日蛋糕（香工街店）",tjmsinfo:"10英寸新鲜水果蛋糕1个，约10英寸，圆形",didian:"西岗区",tjmsqian:109,yuanjia:248},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd5.jpg"),tjmstitle:"弥尚榴芒蛋糕店（车家村店）",tjmsinfo:"榴芒蛋糕1个，约10英寸，圆",didian:"春柳",tjmsqian:188,yuanjia:398},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd6.jpg"),tjmstitle:"酷兰蛋糕（春柳店）",tjmsinfo:"8英寸蛋糕1个，可免费写8个字，赠送卡片1张",didian:"春柳",tjmsqian:69.9,yuanjia:168},
      ],
      tjmsdatasy:[
        {tjmsurl:"https://www.meituan.com/meishi/52794220/",tjmsimg:require("../assets/images/gd1.jpg"),tjmstitle:"必胜客（香炉礁店）",tjmsinfo:"3份【工作日特惠午餐D022】1份",didian:"西岗区",tjmsqian:99,yuanjia:135},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd8.jpg"),tjmstitle:"欧菲克生日蛋糕（西安路店）",tjmsinfo:"全城免费配送，欧菲克生日蛋糕",didian:"西安路沿线",tjmsqian:293,yuanjia:158},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd9.jpg"),tjmstitle:"储缘蛋糕（中山广场店）",tjmsinfo:"8英寸卡通生日蛋糕（多啦a梦hellokitty小黄人、大白、海绵宝宝等-领先推出蛋糕店送货上门贴心服务的理念,同城3公里可免费配送到家！-1个，约8英寸，圆型",didian:"友好广场",tjmsqian:69,yuanjia:96},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd10.jpg"),tjmstitle:"彤德莱（车家村店）",tjmsinfo:"四人套餐，提供免费WiFi",didian:"春柳",tjmsqian:218,yuanjia:278},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd11.jpg"),tjmstitle:"毕富肥牛海鲜火锅（千山路店）",tjmsinfo:"2人套餐",didian:"甘井子区",tjmsqian:68,yuanjia:115},
        {tjmsurl:"##",tjmsimg:require("../assets/images/gd12.jpg"),tjmstitle:"糕速烘焙生日蛋糕（香工街店）",tjmsinfo:"水果多多，8英寸欧式水果蛋糕，图片任选1个，约8英寸，圆",didian:"西岗区",tjmsqian:79.9,yuanjia:168},
      ],
      isactive:[1,0,0,0,0],
    }
  },
  methods:{
    jsj(s){
      for(let i=this.isactive.length;i>=0;i--){
        this.$set(this.isactive,i,0);
      }
      this.$set(this.isactive,s,1);
    }
  }
}
</script>
<style>
  .ygdsimg{width:356px;border-radius:5px;}
  .contenter{border-radius:5px;transition:all 0.2s;}
  .contenter:hover{background:#F4F4F4;}
  .ygdqian{color:#BE9E4D;}
  .ygdqian b{font-size:20px;margin-right:10px;}
  .ygdmsj{color:#999;font-size:12px;text-decoration:line-through;}
  .ygdmdidian{color:#999;font-size:12px;line-height:30px;}
  .biandiandian{width:356px;    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;display:block;}
  .bg_ygd{background:linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);background:rgb(190, 164, 116);color:#fff;text-align:left;border-top-right-radius:4px;border-top-left-radius:4px;padding:10px;width:100%;float:left;}
  /*.tjmsw{width:1150px;margin:0 auto;border:1px solid #e5e5e5;borde-radius:4px;}*/
  /*.tjmscen{width:100%;float:left;display:block;}*/
  /*.bg-tjms{background:linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);color:#fff;text-align:left;border-top-right-radius:4px;border-top-left-radius:4px;padding:10px;width:100%;float:left;}*/
  /*.bg-tjmsdidian{float:left;margin-left:25px;position:relative;font-size:14px;cursor:pointer;}*/
  /*.sanjiao:before{position:absolute;top:28px;left:8px;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:7px solid #fff;content:" ";width:2px;cursor:pointer;}*/
  /*.bg-tjms ul h6{line-height:22px;}*/
  /*.tjmsimg{width:367px;height:208px;float:left;border-radius:5px;}*/
  /*.tjmstouxiang{position:absolute;top:185px;left:305px;width:48px;height:48px;border:2px solid #fff;z-index:1;border-radius:40px;}*/
  /*.tjms-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:310px;color:#222;}*/
  /*.tjmsinfo{color:#999;font-size:12px;}*/
  /*.tjmsqian{color:#F60;font-weight:700;font-size:19px;}*/
  /*.color{color:#fff;}*/
  /*.color:hover{color:#fff;}*/
</style>
