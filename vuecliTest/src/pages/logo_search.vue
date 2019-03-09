<template>
<div class="w-100 bg-white float-left box-shadow jiaheight">
  <div class="searchwidth">
    <div class="float-left pr-5 pt-4 pb-5 logowidth">
      <img src="../assets/images/logo.png" alt="logo" class="logoclass">
    </div>
    <div class="float-left pt-3">
      <form action="" class="form-size">
        <div class="input-group xiangdui">
          <input type="text" placeholder="搜索商家或地点" class="form-control search" @focus="jujiao()" @blur="shijiao()">
          <div class="input-group-append">
            <button class="btn btn-yans"><span class="search_ico"></span></button>
          </div>
          <div class="focus-secrch bg-white box-shadow" v-show="show1">
            <div class="remen">热门搜索</div>
            <div class="remenneirong"><a href="##" v-for="name in tuijian" class="pr-2 remencont">{{name}}</a></div>
          </div>
        </div>
        <div class="input-group tuijian pt-2 pl-2">
          <a href="##" v-for="name in tuijian" class="pr-2">{{name}}</a>
        </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:"logo_search",
  data(){
    return {
      tuijian:["大连圣亚海洋世界","大连老虎滩海洋公园","中影华臣影城","大连森林动物园","橙天嘉禾影城"],
      show1:""
    }
  },
  methods:{
    jujiao(){
      this.show1=true;
    },
    shijiao(){
      this.show1=false;
    }
  }
}
</script>
<style>
  input:focus {
    outline: none !important;
    border-color: #13D1BE !important;
    box-shadow:none !important;
    border-top-left-radius:5px !important;
    border-bottom-left-radius:5px !important;
  }
  .box-shadow{
    -webkit-box-shadow:0 10px 27px 0 rgba(0,0,0,.1);
    -moz-box-shadow:0 10px 27px 0 rgba(0,0,0,.1);
    box-shadow:0 10px 27px 0 rgba(0,0,0,.1);
  }
  .searchwidth{width:1150px !important;margin:0 auto;}
  .logoclass{width:126px;height:46px;float: left;}
  .logowidth{min-width:220px;}
  .form-size{width:550px;height:40px;}
  .btn-yans{background:#13D1BE;width:80px; outline: none;}
  .search{border:1px solid #13D1BE !important;padding:10px;}
  .search_ico:before{content:"\e611";}
  .tuijian{font-size:13px;color:#999;}
  .tuijian a{color:#999;}
  .tuijian a:hover{color:#13D1BE;}
  .xiangdui{position:relative;top:0;}
  .focus-secrch{position:absolute;top:38px;left:0; z-index:100;border-bottom-right-radius:3px;border-bottom-left-radius:3px;height:90px;width:100%;}
  .remen{text-align:left;padding:10px 10px 5px 10px;font-weight:700;font-size:14px;color:#999;}
  .remencont{color:#999;font-size:13px;padding:0 0 10px 10px;float:left;}
  .remencont:hover{color:#13D1BE;}
  .remenneirong{height:30px;overflow:hidden;}
</style>
