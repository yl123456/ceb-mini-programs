// pages/discover/discover.js
var API = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advertisementList: [],
    bannerData: [],
    videoData: {},
  },


  getData() {
    var that = this;
    wx.showLoading({
      title: 'loading...',
    })
    API.api.request(API.api.api_discovery, {},
      function (res) {
        wx.hideLoading();
        that.setData({
          advertisementList: res.data.return_data.advertisementList,

        })

        that.addDatas();


      }, function () {

      }, function () {
      })
  },



  addDatas: function () {
    const length = this.data.advertisementList.length;
    for (let i = 0; i < length; ++i) {
      var templateID = this.data.advertisementList[i].templateID;
      if (templateID == 2) {
        this.setData({
          bannerData: this.data.advertisementList[i].data.link
        })
      } else if (templateID == 6) {
        this.setData({
          videoData: this.data.advertisementList[i].data
        })
      }


    }
  },


  goToWebview: function (event) {
    console.log(event.currentTarget.id);
    switch (event.currentTarget.id) {
      case "bannerId":
          
        break;
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
    this.getData();
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