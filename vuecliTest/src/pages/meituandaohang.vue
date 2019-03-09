<template>
  <div class="mtdhwidth mt-4">
    <div class="danghang">美团导航</div>
    <div class="danghang-c">
      <dt class="float-left">热门城市</dt>
      <div class="float-left dimingw">
        <dd v-for="(n,index) in chengshi"><a href="##">{{n.didian}}</a></dd>
      </div>
    </div>
    <div class="danghang-c">
      <dt class="float-left">热门分类</dt>
      <div class="float-left dimingw">
        <dd v-for="(n,index) in feiie"><a href="##">{{n.name}}</a></dd>
      </div>
    </div>
    <div class="danghang-c">
      <dt class="float-left">热门周边</dt>
      <div class="float-left dimingw">
        <dd v-for="(n,index) in zhoumian"><a href="##">{{n.name}}</a></dd>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"meituandaohang",
  data(){
    return{
      chengshi:[
        {didian:"广州",url:"##"},
        {didian:"大连",url:"##"},
        {didian:"贵阳",url:"##"},
        {didian:"石家庄",url:"##"},
        {didian:"合肥",url:"##"},
        {didian:"长沙",url:"##"},
        {didian:"上海",url:"##"},
        {didian:"苏州",url:"##"},
        {didian:"佛山",url:"##"},
        {didian:"福州",url:"##"},
        {didian:"济南",url:"##"},
        {didian:"西安",url:"##"},
        {didian:"北京",url:"##"},
        {didian:"昆明",url:"##"},
        {didian:"哈尔滨",url:"##"},
        {didian:"郑州",url:"##"},
        {didian:"东莞",url:"##"},
        {didian:"长春",url:"##"},
        {didian:"深圳",url:"##"},
        {didian:"太原",url:"##"},
      ],
      feiie:[
        {name:"酒店"},
        {name:"美食"},
        {name:"休闲娱乐"},
        {name:"运动健身"},
        {name:"生活服务"},
        {name:"上门服务"},
        {name:"购物"},
        {name:"时尚购"},
        {name:"本地购物"},
        {name:"结婚"},
        {name:"摄影写真"},
        {name:"宴会"},
        {name:"丽人"},
        {name:"母婴亲子"},
        {name:"学习培训"},
        {name:"家装"},
        {name:"汽车服务"},
        {name:"医疗"},
        {name:"宠物"},
      ],
      zhoumian:[
        {name:"台南酒店"},
        {name:"台南美食"},
        {name:"普兰店休闲娱乐"},
        {name:"普兰店运动健身"},
        {name:"瓦房店生活服务"},
        {name:"普兰店上门服务"},
        {name:"台南购物"},
        {name:"台南时尚购"},
        {name:"台南本地购物"},
        {name:"瓦房店结婚"},
        {name:"台南摄影写真"},
        {name:"瓦房店宴会"},
        {name:"瓦房店丽人"},
        {name:"瓦房店母婴亲子"},
        {name:"普兰店学习培训"},
        {name:"台南家装"},
        {name:"瓦房店汽车服务"},
        {name:"普兰店医疗"},
        {name:"普兰店宠物"},
      ]
    }
  }
}
</script>
<style>
  .mtdhwidth{width:1150px; margin:0 auto; border:1px solid #E5E5E5;border-radius:4px;height: 270px;background:#fff;}
  .danghang{background:#0ECAC7;text-align:left;padding:10px;color:#fff;border-top-right-radius:4px;border-top-left-radius:4px;}
  .danghang-c{width:100%;float:left;padding:10px;border-bottom:1px solid #E5E5E5;}
  .danghang-c dt{font-weight:500;margin-right:20px;}
  .danghang-c dd{float: left;width:100px;text-align:left;font-size:13px;}
  .dimingw{width:1040px;}
  .dimingw dd{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.mtdhwidth div:nth-child(4) dd{width:85px;margin-right:15px;}
</style>
