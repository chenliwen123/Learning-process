<template>
  <div class="wcainilick mt-4">
      <div class="danghang">
        <ul>
          <li>猜你喜欢</li>
          <li class="zhenxuan">为你甄选最合适的</li>
        </ul>
      </div>
    <div class="float-left pnxh w-100">
      <a :href="item.sjurl" class="coumnl" v-for="(item,index) in shangjia" :key="index">
        <div class="p-2 float-left">
          <div><img :src="item.sjimg" alt="" class="likeimg"></div>
          <div>
            <div class="liketitle pt-1">{{item.title}}</div>
            <div class="likepj w-100 text-left pt-1">
              <div class="wrap">
                <div v-for="item2 in 5" :class="{'solid':item.cur>=item2}"></div>
              </div>
              <span class="pl-5">{{item.pingjia}}个评价</span>
            </div>
            <div class="float-left w-100 text-left likedidian pt-1 pb-1">{{item.weizhi}}&nbsp;</div>
            <span class="float-left w-100 text-left likeqian"><span>￥{{item.jiaqian}}</span><small class="ml-1">起</small></span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:"cainilike",
  data(){
    return {
      shangjia:[
        {sjurl:"https://www.meituan.com/meishi/1556229/",sjimg:require("../assets/images/shangjia1.jpg"),title:"鼎香缘海鲜自助火锅（佳兆业店）",cur:4,pingjia:"28116",weizhi:"友好广场",jiaqian:"69.0"},
        {sjurl:"https://www.meituan.com/meishi/92588688/",sjimg:require("../assets/images/shangjia2.jpg"),title:"故乡烤肉（左岸经典店）",cur:5,pingjia:"715",weizhi:"",jiaqian:"79.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia3.jpg"),title:"华晟山城火锅（金马路店）",cur:5,pingjia:"6597",weizhi:"",jiaqian:"89.9"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia4.jpg"),title:"那胡同里的小烤肉馆（万达店）",cur:4,pingjia:"499",weizhi:"",jiaqian:"98.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia5.jpg"),title:"泷千家（工业大学店）",cur:4,pingjia:"321",weizhi:"周水子机场",jiaqian:"9.9"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia6.jpg"),title:"绿波休闲洗浴",cur:3,pingjia:"8285",weizhi:"春柳",jiaqian:"33.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia7.jpg"),title:"优为客牛排自助（恒隆广场店）",cur:4,pingjia:"2550",weizhi:"恒隆广场",jiaqian:"67.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia8.jpg"),title:"歪嘴香重庆鸡公煲（宏基书香园锦辉店）",cur:4,pingjia:"2902",weizhi:"",jiaqian:"25.9"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia9.jpg"),title:"格兰西点（和平路店）",cur:4,pingjia:"6700",weizhi:"金州",jiaqian:"88.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia10.jpg"),title:"灵芝妹子生蚝米线（软景店）",cur:4,pingjia:"721",weizhi:"软件园/数码广场",jiaqian:"21.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia11.jpg"),title:"西赛德海鲜自助烤肉（金石滩店）",cur:5,pingjia:"9461",weizhi:"",jiaqian:"59.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia12.jpg"),title:"101比萨（第五郡店）",cur:4,pingjia:"421",weizhi:"",jiaqian:"47.5"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia13.jpg"),title:"阿尔卑斯牛排披萨自助西餐厅（高新万达店）",cur:5,pingjia:"32090",weizhi:"万达广场",jiaqian:"74.9"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia14.jpg"),title:"鼎香缘海鲜自助火锅烤肉（西安路旗舰店）",cur:4,pingjia:"398",weizhi:"西安路沿线",jiaqian:"72.0"},
        {sjurl:"##",sjimg:require("../assets/images/shangjia15.jpg"),title:"申记串道（八一路店）",cur:5,pingjia:"160",weizhi:"八一路沿线",jiaqian:"90.0"},

      ],
      cur : 2,
    }
  },
  methods:{
  }
}
</script>
<style>
  .wcainilick{width:1150px;margin:0 auto;background:#fff;height:800px;border:1px solid  #E5E5E5;border-radius:4px;}
  .danghang{background:#0ECAC7;text-align:left;padding:10px;color:#fff;border-top-right-radius:4px;border-top-left-radius:4px;float:left;width:100%;}
  .danghang ul li{float:left;margin-right:25px;}
  .zhenxuan{font-size:14px;}
  .zhenxuan:before{position:absolute;content:" ";border-left:5px solid transparent;border-right: 5px solid transparent;border-bottom:7px solid #fff;margin:27px 0 0 44px;}
  .pnxh{padding:10px;}
  .coumnl{float:left;width:20%;display:block;border-radius:4px;}
  .coumnl:hover{background:#F4F4F4;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;}
  .liketitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:214px;float:left;color:#222;text-align:left;}
  .likeimg{float:left;border-radius:4px;margin-left:-3px;}
  .likepj{float:left;color:#999;font-size:12px;}
  .likeqian{color:#F60;font-weight:700;}
  .likedidian{color:#999;font-size:12px;}
  .wrap{}
  .wrap>div{width: 18px;height: 27px;float: left;background: url(../assets/images/star-off.png) no-repeat;background-size: 14px;}
  .wrap .solid{background: url(../assets/images/star-on.png) no-repeat;background-size: 14px;}
</style>
