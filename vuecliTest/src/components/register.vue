<template>
  <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
    <form action="" class="col-12 col-sm-10 col-md-8 col-xl-6">
      <h2>注册账号</h2>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="用户名">
      </div>
      <div class="input-group pt-2">
        <input type="text" class="form-control" placeholder="请输入手机号">
      </div>
      <div class="input-group pt-2">
        <input type="text" class="form-control" placeholder="验证码" id="shoujihao">
        <div class="input-group-append">
          <input type="button" class="btn btn-primary" :value="msg" id="yanzhengbtn" @click="fsyzm">
        </div>
      </div>
      <div class="input-group pt-2">
        <input type="password" class="form-control" placeholder="密码">
      </div>
      <div class="input-group pt-2">
        <input type="password" class="form-control" placeholder="确认密码">
      </div>
      <div class="input-group pt-2">
        <div class="custom-checkbox custom-control">
          <input type="checkbox" class="custom-control-input" id="tongyi">
          <label for="tongyi" class="custom-control-label">我以阅读并同意<a href="##">xxx</a>协议</label>
        </div>
      </div>
      <div class="input-group pt-2">
        <input type="submit" class="btn btn-primary w-100" value="Submit">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      msg: '获取短信验证码',
      dingshiqi: '',
      shijian: 60
    }
  },
  methods: {
    fsyzm () {
      $('#yanzhengbtn').prop('disabled', true)
      this.msg = this.shijian + '秒后重新发送'
      this.dingshiqi = setInterval(this.zdysj, 1000)
    },
    zdysj () {
      this.shijian = this.shijian - 1
      this.msg = this.shijian + '秒后重新发送'
      if (this.shijian == 0) {
        this.ms = '重新发送验证码'

        $('#yanzhengbtn').prop('disabled', false)
        clearInterval(this.dingshiqi)
        return false
      }
    }
  }
}

</script>
