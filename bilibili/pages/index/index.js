Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentindexnav:0,
    navlist: [],
    swiperlist:[],
    videolist: [],
  },
  activeNav(e){
    this.setData({
      currentindexnav:e.target.dataset.index
    })
  },
  getNavlist() {
    let _this=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success: (res)=>{
        if(res.data.code===0){
          _this.setData({
            navlist:res.data.data.navList
          })
        }
      }
    })
  },
  /*获取轮播图数据*/
  getswiperlist(){
    let _this=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        if(res.data.code===0){
          _this.setData({
            swiperlist:res.data.data.swiperList
          })
        }
      }
    })
  },
  /**
   * 获取视频列表
   */
  getvideolist() {
    let _this=this;
    wx:wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success: function(res) {
        if(res.data.code===0){
          _this.setData({
            videolist:res.data.data.videosList
          })
        }
        
      },
    })
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavlist();
    this.getswiperlist();
    this.getvideolist();
     },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})