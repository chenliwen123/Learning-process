<template>
  <div class="videow d-flex mt-5">
    <div class="position-relative w-100 bg-white overflow-hidden">
      <div class="text-left bg-video w-100 float-left">
        <ul class="video_list">
          <h6>猫眼电影</h6>
          <li class="position-relative" :class="listshow[0]?videosanjiao:''" @mousemove="jingguo(0)">正在热映</li>
          <li class="position-relative" :class="listshow[1]?videosanjiao:''" @mousemove="jingguo(1)">即将上映</li>
          <li class="float-right"><a href="##" class="color">全部&gt;</a></li>
        </ul>
      </div>
      <div class="position-relative videofr float-left w-100" v-show="listshow[0]">
        <div class="float-left mt-3 mb-4 hovervideo position-relative" :style="[{width:width+'px'},{left:left+'px'}]">
          <div class="position-relative float-left margin_20" v-for="(item,index) in video" v-if="index<=9">
            <img :src="item.url" alt="" class="img_redius">
            <div class="position-absolute videoinfo">
              <div class="yingping"><b v-show="item.zhuangt=='购票'">观众评</b><span v-show="item.zhuangt=='购票'">{{item.guanzhongping}}</span><span v-show="item.zhuangt=='预售'">{{item.xkrs}}</span><b v-show="item.zhuangt=='预售'">人想看</b></div>
              <div class="videotitle">{{item.title}}</div>
              <div class="goupiao">{{item.zhuangt}}</div>
            </div>
          </div>
        </div>
        <div class="pra" @click="youyi()">&lt;</div>
        <div class="text" @click="zuoyi()">&gt;</div>
        <div class="position-absolute item-dian">
          <ul>
            <li :style="{opacity:left==0 ? 0.3:0.9}"></li>
            <li :style="{opacity:left==-1150 ? 0.3:0.9}"></li>
          </ul>
        </div>
      </div>
      <div class="position-relative videofr float-left w-100" v-show="listshow[1]">
        <div class="float-left mt-3 mb-4 hovervideo position-relative" :style="[{width:width+'px'},{left:left+'px'}]">
          <div class="position-relative float-left margin_20" v-for="(item,index) in video" :key="index" v-show="item.zhuangt=='预售'">
            <img :src="item.url" alt="" class="img_redius">
            <div class="position-absolute videoinfo">
              <div class="yingping"><span>{{item.xkrs}}</span><b>人想看</b></div>
              <div class="videotitle">{{item.title}}</div>
              <div class="goupiao">{{item.zhuangt}}</div>
            </div>
          </div>
        </div>
        <div class="pra" @click="youyi()">&lt;</div>
        <div class="text" @click="zuoyi()">&gt;</div>
        <div class="position-absolute item-dian">
          <ul>
            <li :style="{opacity:left==0 ? 0.3:0.9}"></li>
            <li :style="{opacity:left==-1150 ? 0.3:0.9}"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"videotemp",
  data(){
    return{
      video:[
        {title:"惊奇队长",guanzhongping:"8.8",url:require("../assets/images/video1.jpg"),zhuangt:"购票",xkrs:"12306"},
        {title:"绿皮书",guanzhongping:"9.6",url:require("../assets/images/video2.jpg"),zhuangt:"购票",xkrs:"12306"},
        {title:"夏目友人帐",guanzhongping:"9.2",url:require("../assets/images/video3.jpg"),zhuangt:"购票",xkrs:"12306"},
        {title:"阿丽塔：战斗天使",guanzhongping:"9",url:require("../assets/images/video4.jpg"),zhuangt:"购票",xkrs:"12306"},
        {title:"驯龙高手3",guanzhongping:"9.1",url:require("../assets/images/video5.jpg"),zhuangt:"购票",xkrs:"12306"},
        {title:"流浪地球",guanzhongping:"9.3",url:require("../assets/images/video6.jpg"),zhuangt:"购票",xkrs:"12306"},
        {title:"我的英雄学院：两位英雄",guanzhongping:"9.3",url:require("../assets/images/video7.jpg"),zhuangt:"预售",xkrs:"12306"},
        {title:"比悲伤更悲伤的故事",guanzhongping:"9.3",url:require("../assets/images/video8.jpg"),zhuangt:"预售",xkrs:"12306"},
        {title:"阳台上",guanzhongping:"9.3",url:require("../assets/images/video9.jpg"),zhuangt:"预售",xkrs:"12306"},
        {title:"过春天",guanzhongping:"9.3",url:require("../assets/images/video10.jpg"),zhuangt:"预售",xkrs:"12306"},
        {title:"今世未了缘",guanzhongping:"9.3",url:require("../assets/images/video11.jpg"),zhuangt:"预售",xkrs:"1473"},
        {title:"未来的你",guanzhongping:"9.3",url:require("../assets/images/video12.jpg"),zhuangt:"预售",xkrs:"1308"},
        {title:"把哥哥退货可以吗",guanzhongping:"9.3",url:require("../assets/images/video13.jpg"),zhuangt:"预售",xkrs:"5208"},
        {title:"少女宿舍",guanzhongping:"9.3",url:require("../assets/images/video14.jpg"),zhuangt:"预售",xkrs:"4121"},
        {title:"老公去哪了",guanzhongping:"9.3",url:require("../assets/images/video15.jpg"),zhuangt:"预售",xkrs:"1329"},
        {title:"舞台",guanzhongping:"9.3",url:require("../assets/images/video16.jpg"),zhuangt:"预售",xkrs:"303"},

      ],
      width:2300,
      left:0,
      listshow:[1,0,0],
      videosanjiao:"videosanjiao",
    }
  },
  methods:{
    zuoyi(){
      this.left=-1150;
    },
    youyi(){
      this.left=0;
    },
    jingguo:function(s){
      for(let i =this.listshow.length;i>=0;i--){
        this.$set(this.listshow,i,0);
      }
      this.$set(this.listshow,s,1);
    }
  }
}
</script>
<style>
  .videow{width:1150px;margin:0 auto;border:1px solid #e5e5e5;border-radius:4px;}
  .video_list{margin:0;padding:10px; color:#fff;}
  .video_list h6{float:left;line-height:1.5;margin-right:25px;padding:0;}
  .video_list li{float:left;margin-right:20px;font-size:14px;}
  .video_list li:hover{cursor:pointer;}
  .bg-video{background:linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);border-top-left-radius:4px;border-top-right-radius:4px;}
  .videosanjiao:before{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:7px solid #fff;width:2px;position:absolute;top:25px;left:20px;
    content:" ";}
  .img_redius{border-radius:5px;}
  .videoinfo{width:100%;background:linear-gradient(-180deg,rgba(0,0,0,0) 0,rgba(29,45,55,.8) 99%);bottom:0;color:#fff;border-radius:7px;}
  .yingping{width:100%;float: left;padding-left:15px;margin-bottom:-5px;}
  .yingping span{color:#FD9827;font-weight:500;font-size:17px;float:left;text-align:left;}
  .yingping b{font-size:12px;float:left;line-height:2;text-align:left;margin-right:5px;}
  .videotitle{float: left;padding-left:15px;padding-bottom:8px;text-align:left;width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .goupiao{background:#FF4949;border-radius:100px;float:right;padding:2px 10px;font-size:14px;margin: 0 15px 10px 0;cursor:pointer;}
  .margin_20{margin:0 8px;}
  .pra{position:absolute;left:0;top:40%;background:rgba(0,0,0,0.7);width:40px;height:40px;border-radius:20px;color:#fff;font-size:27px;opacity:0;transition:all 0.3s;cursor:pointer;}
  .text{position:absolute;right:0;top:40%;background:rgba(0,0,0,0.7);width:40px;height:40px;border-radius:20px;color:#fff;font-size:27px;opacity:0;cursor:pointer;transition:all 0.3s;}
  .hovervideo{width:100%;transition: all 0.5s;}
  .videofr:hover .pra{opacity: 1;}
  .videofr:hover .text{opacity: 1;}
  .item-dian{bottom:10px;left:50%;}
  .item-dian ul li{width:8px;height:2px;background:#333;float:left;margin-right:10px;}
</style>
