// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viedoinfo:"",
    othersList:"",
    pinglun:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoid=options.id
    this.getcurrentvideo(videoid);
    this.gettuijianshipin(videoid);
    this.getpinlun(videoid);
  },
/*
   根据id 获取视频详情
*/
  getcurrentvideo(videoid){
    let _this=this;
  wx.request({
    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + videoid,
    success(res){
        _this.setData({
        viedoinfo:res.data.data.videoInfo
      })
    }
  })
},
/*
根据id 获取视频下放推荐视频
 */
  gettuijianshipin(videoid){
  let _this=this;
  wx.request({
    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+videoid,
    success:function(res){
       _this.setData({
         othersList: res.data.data.othersList
       });
    }
  })
},
/**
 * 获取评论
 */
  getpinlun(videoid){
    let _this=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + videoid,
      success:function(res){
        console.log(res);
        if(res.data.code===0){
          _this.setData({
            pinglun: res.data.data.commentData
          })
        }
      }
    })
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