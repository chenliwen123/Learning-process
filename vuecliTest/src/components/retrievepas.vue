<template>
  <div class="container d-flex justify-content-center align-items-center height100">
    <form action="" class="col-sm-10 col-md-6 col-xl-4 col-12">
      <h2 class="text-primary">找回密码</h2>
      <div class="input-group">
        <div class="input-group-prepend">
          <label for="retrieveuser" class="input-group-text">用户名</label>
        </div>
        <input type="text" :class="retrieveuserclass" id="retrieveuser" :value="mas" @input="mas=$event.target.value,retrievesubmit()" placeholder="请输入用户名">
      </div>
      <div class="mt-2 d-flex">
           <input type="text" placeholder="请输入验证码" :class="retrievecheckclass" :value="retrieveyz"  @input="retrieveyz=$event.target.value,retrieveinput()">
          <img src="http://temp.im/150x40" alt="" class="pl-2">
      </div>
      <div class="input-group pt-2">
        <input type="button" value="提交" class="btn btn-primary w-100" @click="xszzc">
      </div>
    </form>
    <!--提交之后的遮罩层-->
    <div class="container-flui zzc w-100" v-if="showzzc">
      <div class="container-flui d-flex justify-content-center align-items-center height100">
        <div class="bg-white tuoying p-4">
         <h4 class="text-primary">验证码已发送至</h4>
          <div>手机号:{{mas}}</div>
          <div class="input-group input-group mt-3">
            <input type="text" class="form-control" placeholder="请输入手机验证码">
          </div>
          <input type="button" value="取消" class="btn btn-warning mr-5 mt-3" @click="yczzc()"><input type="submit" value="确定" @click="zhcg()" class="btn btn-success mt-3 w-50">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "retrievepas",
    data () {
      return {
        mas: "",
        retrieveyz: "",
        retrieveuserclass: ["form-control"],
        retrievecheckclass: ["form-control"],
        showzzc:"",
      }
    },
    prop: ["sth"],
    methods: {
      retrievesubmit () {
        if (this.mas == "") {
          this.retrieveuserclass.push('redborder');
        } else {
          var index = this.retrieveuserclass.indexOf('redborder')
          if (index > -1) {
            this.retrieveuserclass.splice(index, 1)
          }
        }
      },
      retrieveinput () {
        if (this.retrieveyz == "") {
          this.retrievecheckclass.push('redborder');
        }else {
          let index=this.retrievecheckclass.indexOf('redborder');
          if (index>-1){
            this.retrievecheckclass.splice(index,1)
          }
        }
      },
      xszzc:function () {
        this.showzzc=true;
      },
      yczzc:function () {
        this.showzzc=false;
      },
      zhcg:function () {
        this.$router.push("/zhmmcg");
      }
    }
  }
</script>
<style>
  img{width:100%;}
  .height100{height:100vh;}
  .redborder{border:1px #f00000 solid;}
  .zzc{position:absolute;top:0;left:0;background-color:rgba(0,0,0,0.3);}
  .tuoying{
    -webkit-box-shadow: 1px 3px 20px 15px rgba(0,0,0,0.2);
    -moz-box-shadow:  1px 3px 20px 15px rgba(0,0,0,0.2);
    box-shadow:  1px 3px 20px 15px rgba(0,0,0,0.2);
  }
</style>
