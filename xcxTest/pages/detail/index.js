///index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    mainInfo: {},
    userInfo: {},
    info: {},
    roomList: {}, //驼峰命名格式
    main:{},
   
  },
 
  onLoad: function (options) {
    this.getData(); //执行自定义方法
    this.getRooms();
    this.roomChange();
  },


  // 假数据项
  roomChange:function(event){
    var that=this;
    var res = {
      error_code:0,
      message: "success",
      data:{
        house_type: [
          {
            room_str: "二居室",
            list: [
              {
                title: "三室两厅两卫",
                area: "150平"
              },
              {
                title: "三室两厅两卫",
                area: "150平"
              },
              {
                title: "三室两厅两卫",
                area: "150平"
              },
            ]
          },
          {
            room_str: "三居室",
            list: [
              {
                title: "四室两厅两卫",
                area: "150平"
              },
              {
                title: "四室两厅两卫",
                area: "150平"
              },
              {
                title: "四室两厅两卫",
                area: "150平"
              },
            ]
          },
          {
            room_str: "四居室",
            list: [
              {
                title: "三室一厅两卫",
                area: "150平"
              },
              {
                title: "三室一厅两卫",
                area: "150平"
              },
              {
                title: "三室一厅两卫",
                area: "150平"
              },
            ]
          },
        ]
      }
     
    }
    that.setData({
      main: res,
      roomList: res
    })
    console.log(that);
},
    
  
  
  
  
  
  
  
  
  
  
  
  
  // 第一个接口
  getData:function(){
    var that = this; //闭包的作用
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/xinfang',
      method: 'get',
      dataType: 'json',
      success: function (res) {
        // res.data.data.typs_conditions.forEach(function (item, index) {
        //   if (index == 0) {
        //     item.d = true;
        //   } else {
        //     item.d = false;
        //   }
        // })
        that.setData({
          info: res.data
        })
        // console.log(that.data.info.data);
      }
    })
  },
 
  // 第二个接口
  changeRooms: function (event) {
    var index = event.currentTarget.dataset.id;
    var that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      method: 'get',
      dataType: 'json',
      data: {
        type_id: index
      },
      success: function (res) {
        // var infoTemp = that.data.info
        //  // 列表切换
        // infoTemp.data.typs_conditions.forEach(function (item) {
        //   item.d = false
        // })
        // infoTemp.data.typs_conditions[index].d = true;
       
        that.setData({
          roomList: res.data,
          // infoTemp: 
        })
        console.log(that)
      }
    })
  },
 
 
  getRooms: function () {
    var that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      method: 'get',
      dataType: 'json',
      success: function (res) {
        that.setData({
          roomList: res.data
        })
      }
    })
  },
})















// getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // getMainData: function () {
  //   const that = this;
  //   wx.request({
  //     url: "http://47.93.220.17/Home/Bk/xinfang",
  //     method: "get",
  //     dataType: "json",
  //     success: function (res) {
  //       that.setData({
  //         mainInfo: res.data
  //       });
  //       console.log(that.data.mainInfo);
  //     }
  //   });
  // },