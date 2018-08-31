// pages/authorization/ authorization.js
const app = getApp();
Page(Object.assign({}, {

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    backType:'../../ucenter/index' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      backType: options.backType == undefined ? 'home' : options.backType
    })
  },

  bindGetUserInfo: function(e) {
    let backtype = this.data.backType;
    if (e.detail.userInfo) {
      wx.reLaunch({
        url: '../../index/index'
      })
    } else {
      wx.showToast({
        title: '请重新授权!!',
        icon: 'loading',
        mask: true,
        duration: 3000
      });
    }
  },

  //返回首页 
  navigateBack: function(e) {
    wx.showToast({
      title: '点击右上角退出哦',
      duration: 5000
    })
  }
}));