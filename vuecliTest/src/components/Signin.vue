<template>
  <div class="container justify-content-center d-flex align-items-center" style="height:100vh;">
    <div class="col-11 col-sm-10 col-md-6 col-xl-4 m-auto">
      <h1 class="text-primary">登录</h1>
      <form action="">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <label for="username" class="input-group-text">用户名</label>
          </div>
          <input type="text" class="form-control" id="username" placeholder="请输入用户名">
        </div>
        <div class="input-group input-group-sm mt-2">
          <div class="input-group-prepend">
            <label for="pas" class="input-group-text text-monospace">密&nbsp;&nbsp;码</label>
          </div>
          <input type="password" class="form-control" id="pas" placeholder="密码">
        </div>
        <div class="input-group input-group-sm mt-2 wangji">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" id="c1" class="custom-control-input">
            <label for="c1" class="custom-control-label">记住密码</label>
          </div>
          <div class="float-right bianshou wangjineirong">
            <div @click="wjmm" class="float-right">
              <small>忘记密码?</small>
            </div>
            <div @click="zc" class="float-right pr-2">
              <small>注册</small>
            </div>
          </div>
        </div>
        <div class="input-group-sm input-group center-block mt-2">
          <input type="submit" class="btn btn-primary btn-sm col-12" id="btn1">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Signin',
  date () {
    return {}
  },
  methods: {
    zc () {
      this.$router.push('register')
    },
    wjmm () {
      this.$router.push('retrievepas')
    }
  }
}
$(function () {
  $('#btn1').click(function () {
    var usernma = $('#username').val()
    var password = $('#pas').val()
    localStorage.setItem('username', usernma)
    if ($('#c1').prop('checked') == true) {
      localStorage.setItem('password', password)
    } else {
      localStorage.removeItem('password')
    }
  })
})
window.onload = function () {
  if (localStorage.getItem('password') != null || localStorage.getItem('password') != undefined) {
    $('#c1').prop('checked', true)
  }
  $('#username').val(localStorage.getItem('username'))
  $('#pas').val(localStorage.getItem('password'))
}
</script>
<style>
  .bianshou {
    cursor: pointer;
  }

  .wangji {
    position: relative;
    right: 0;
  }

  .wangjineirong {
    position: absolute;
    right: 0;
  }
</style>
