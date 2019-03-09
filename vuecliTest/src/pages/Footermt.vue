<template>
    <div class="w-100 float-left bgfoote pt-5">
      <div class="mt-2 pt-5 pb-5 footheight">
        <div class="foot-column">
          <dl>
            <dt>用户帮助</dt>
            <dd>申请退款</dd>
            <dd>查看美团券密码</dd>
            <dd>常见问题</dd>
            <dd>用户协议</dd>
            <dd>隐私政策</dd>
            <dd>反诈骗公告</dd>
          </dl>
          <dl>
          <dt>美团服务</dt>
          <dd>美团外卖</dd>
          <dd>美团酒店</dd>
          <dd>猫眼电影</dd>
          <dd>美团配送</dd>
          <dd>美团云</dd>
          <dd>大众点评</dd>
          <dd>榛果民宿</dd>
          <dd>无人配送</dd>
          </dl>
        </div>
        <div class="foot-column">
          <dl>
            <dt>商家合作</dt>
            <dd v-for="(n,index) in hzsj" :key="index">
              <a :href="n.url">{{n.name}}</a>
            </dd>
          </dl>
        </div>
        <div class="foot-column">
          <dl>
            <dt>代理商加盟</dt>
            <dd><a href="https://daili.meituan.com/?comeFrom=mtwebBusinesscoopd">到店餐饮代理商招募</a></dd>
            <dd><a href="http://www.dianping.com/apollo/agent/index?source=mtpcd">非餐饮代理商招募</a></dd>
            <dd><a href="http://union.meituan.com/">美团联盟</a></dd>
            <dd><a href="https://store.meituan.com/distribution/broadcast">美团收银招募线上分销商</a></dd>
            <dd><a href="https://agent.meituan.com/zhaoshang?entry=5">美团点评5S服务商招募</a></dd>
          </dl>
          <dl>
            <dt>行业规范</dt>
            <dd><a href="https://portal-portm.meituan.com/webpc/protocolmanage/foodsafe">美团点评餐饮安全管理办法</a></dd>
          </dl>
          <dl>
            <dt>廉政举报</dt>
            <dd><a href="mailto:lianzheng@meituan.com">廉政邮箱</a></dd>
          </dl>
        </div>
        <div class="foot-column">
          <dl>
            <dt>关注美团</dt>
            <dd><a href="http://weibo.com/meituan">美团新浪微博</a></dd>
          </dl>
          <dl>
            <dt>公司信息</dt>
            <dd><a href="##">关于我们</a></dd>
            <dd><a href="">投资者关系</a></dd>
            <dd><a href="">加入我们</a></dd>
            <dd><a href="">法律声明</a></dd>
            <dd><a href="">价格说明</a></dd>
            <dd><a href="">美团网平台点评规则</a></dd>
            <dd><a href="">美团点评团购用户服务条款</a></dd>
            <dd><a href="">商户诚信公约及管理办法</a></dd>
          </dl>
        </div>
        <div class="foot-column">
          <dl>
            <dt>消费者服务热线</dt>
            <dd>消费者热线<a href="tel:10109777">10109777</a></dd>
            <dd>猫眼热线<a href="tel:10105335">10105335</a></dd>
            <dd>其他消费者热线<a href="tel:10107888">10107888</a></dd>
          </dl>
          <dl>
            <dt>商家服务热线</dt>
            <dd>外卖&餐饮商家：<a href="10105557">10105557</a></dd>
            <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：<a href="10100107">10100107</a></dd>
          </dl>
          <dl>
            <dt>投诉举报热线</dt>
            <dd>违法和不良信息举报电话：<a href="4006018900">4006018900</a></dd>
            <dd>举报邮箱：<br><a href="##">tousujubao@meituan.com</a></dd>
          </dl>
          <dl>
            <dt>商家自助美团入口</dt>
          </dl>
        </div>
      </div>
      <div class="footerfoot">
        <div class="float-left">
          <p class="footp">©美团网团购 meituan.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.beianbeian.com/beianxinxi/283f39a9-4c00-427a-97ef-3c7a9e1e0af1.html" calss="rla">京ICP证070791号</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
            href="http://www.miitbeian.gov.cn/">京ICP备10211739号</a></p>
          <p class="footp">广播电视节目制作经营许可证（京）字第03889号</p>
          <p class="footp"><a href="##">食品经营许可证</a><a href="##">互联网药品信息服务资格证</a></p>
          <p class="footp">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</p>
        </div>
        <div class="float-right">
          <p class="footp-right"><a href="##">京公网安备11010502025545号</a></p>
          <p class="footer-copyright-cert"><a href="##" class="beian">备案信息</a><a href="##" class="beian1">可信网站</a><a href="##" class="beian2">12315消费争议</a></p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name:"Footermt",
  data(){
    return {
      didian:"大连",
      hzsj:[
        {name:"美食商家入驻(非外卖)",url:"https://ecom.meituan.com/bizsettle/settle?utm_source=mt_C_my"},
        {name:"美团外卖开店申请",url:"https://kd.meituan.com/"},
        {name:"美团收银官网",url:"http://shouyin.meituan.com?utm_source=inner&utm_medium=mtpc"},
        {name:"外卖配送加盟申请",url:"http://page.peisong.meituan.com/apply/join"},
        {name:"美团点评餐饮学院",url:"https://xue.meituan.com/?from=mtpc"},
        {name:"酒店商家入驻",url:"http://ruzhu.meituan.com/ruzhu/index.html"},
        {name:"境内度假商家入驻",url:"https://i.meituan.com/awp/h5/trip/business/cooperation/index.html?client=pc"},
        {name:"综合商家入驻",url:"https://e.dianping.com/claimcpc/page/index?source=mt"},
        {name:"榛果民宿房东商家入驻",url:"https://phoenix.meituan.com/about/"},
        {name:"商家开票申请",url:"http://pc.meituan.com/?activity_code=mtpcdb"},
        {name:"美团点评智能收银机",url:"https://h5.youzan.com/v2/feature/nALm22bkFF?dc_ps=2039811416638097413.200001"},
        {name:"聚宝盆餐饮开放平台",url:"http://developer.meituan.com/"},
        {name:"美团智能支付",url:"http://smartpay.meituan.com/"},
        {name:"免费使用美团排队",url:"https://paidui.meituan.com/?activity_code=167_00038050"},
        {name:"快驴进货商家合作",url:"https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html"},
        {name:"美团闪购商家入驻",url:"https://shangou.meituan.com/joinin"},
        ],
    }
  },
  methods:{

  },
}
</script>
<style>
  a{color:#666;}
  a:hover{color:#0ECAC7;}
.bgfoote{background:#f8f8f8;}
  .foot-column{width:220px;float:left;text-align:left;font-size:12px;}
  .foot-column dt{font-weight:500;font-size:14px;}
  .footheight{height:520px;border-top:1px solid #E5E5E5;border-bottom:1px solid #E5E5E5;width:1150px !important; margin:0 auto;}
  .footerfoot{width:1150px;margin:0 auto;padding:20px 0 20px 10px;}
  .footp{font-size:12px;display:block;margin:0 0 5px 0 !important;text-align:left;}
  .footp-right{text-align:right;font-size:12px;}
  .rla{margin:0 20px 0 20px;display:block;}
  .footer-copyright-cert a{width:110px;height:40px;display:block;float:left;}
  .beian{background-image:url(../assets/images/footer.png);background-position:124px 79px;display:inline-block;text-indent:-200px;overflow:hidden;}
  .beian1{background-image:url(../assets/images/footer.png);background-position:125px 119px;display:inline-block;text-indent:-200px;overflow:hidden;}
  .beian2{background-image:url(../assets/images/footer.png);background-position:124px 206px;display:inline-block;text-indent:-250px;overflow:hidden;}
</style>
