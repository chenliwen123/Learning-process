<template>
<div class="container-fluid d-flex container justify-content-center align-items-center" style="height: 100vh;">
  <form action="">
    <div class="input-group justify-content-center">
      <h3>{{zhmmcg}}</h3><br>
    </div>
    <div class="input-group justify-content-center">
      <h2 class="text-success">用户找回密码成功请输入新密码</h2>
    </div>
    <div class="input-group mt-2">
      <input type="password" class="form-control" placeholder="请输入新密码">
    </div>
    <div class="input-group mt-2">
      <input type="password" class="form-control" placeholder="请再次输入新密码">
    </div>
    <div class="input-group input-group-sm mt-2">
      <input type="button" class="btn btn-primary w-100" @click="queding()" value="确定">
    </div>
  </form>
</div>
</template>
<script>
  export default {
    name:"zhmmcg",
    data(){
      return {
        zhmmcg:""//把用户名也就是电话号传过来
      }
    },
    prop:['mag'],
    methods:{
      queding:function () {
        this.zhmmcg=1111111;
      }
    },
  }
</script>
