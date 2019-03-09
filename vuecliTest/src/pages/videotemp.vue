<template>
  <div class="videow d-flex">
    <div class="position-relative w-100">
      <div class="text-left bg-video w-100 float-left">
        <ul class="video_list">
          <h6>猫眼电影</h6>
          <li class="position-relative videosanjiao">正在热映</li>
          <li>即将上映</li>
        </ul>
      </div>
      <div class="float-left">
        <div>
          <img src="../assets/images/video1.jpg" alt="">
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

    }
  },
  methods:{

  }
}
</script>
<style>
  .videow{width:1150px;margin:0 auto;border:1px solid #e5e5e5;border-top-left-radius:4px;border-top-right-radius:4px;}
  .video_list{margin:0;padding:10px; color:#fff;}
  .video_list h6{float:left;line-height:1.5;margin-right:25px;padding:0;}
  .video_list li{float:left;margin-right:20px;font-size:14px;}
  .bg-video{background:linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);border-top-left-radius:4px;border-top-right-radius:4px;}
  .videosanjiao:before{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:7px solid #fff;width:2px;position:absolute;top:25px;left:20px;
    content:" ";}
</style>
