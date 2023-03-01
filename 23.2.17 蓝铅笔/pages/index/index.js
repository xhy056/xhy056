// index.js
// 获取应用实例
const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")

Page({
  data: {
    // 指示点
    indicatorDots: true,
    // 自动播放
    autoplay:true,
    // 纵向
    vertical:true,
    // 自动切换时间
    interval:2000,
    // 滑动动画时长
    duration:500,
    // 轮播
    carousel:1,
    carouselTwo:["../../images/o_1gmhuo0l4165b9111h576kt3h3s.jpg","../../images/o_1f7ikfhal1thi1il7vo4q3u1r4s7.png","../../images/o_1ftph7r52uvu1s2q1sgq1p18nsa1c.png","../../images/o_1f7as3kuv12rdimaijk24kgm57.jpg","../../images/o_1gmks9b6t93qmlo16lieo4pgh1b.jpg"],
    // 子菜单
    submenu:[{"text":"免费教程","imga":"../../images/h9-b_1806.png"},{"text":"专业课程","imga":"../../images/h12-g_1806.png"},{"text":"大触直播","imga":"../../images/h2-p_2212.png"},{"text":"教程兑换","imga":"../../images/h12-g_1806.png"},{"text":"学员成长","imga":"../../images/h11-c_2212.png"},{"text":"每日一画","imga":"../../images/h11-c_1811.png"},{"text":"素材下载","imga":"../../images/h14-r_2212.png"},{"text":"社区问答","imga":"../../images/h5-p_2211.png"},],
    // 数据
    liangyi:"",
    hot:"",
    questions:"",
    material:""
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    //  咖喱
    http(API.daniu).then(res=>{
        // console.log(res.data.course.data);
        this.setData({
            liangyi: res.data.course.data
        })
      })
    //   热门教程
    http(API.hot).then(res=>{
        // console.log(res.data);
        this.setData({
            hot:res.data
        })
    })
    // 问答专区
    http(API.questions).then(res=>{
        // console.log(res.data);
        this.setData({
            questions:res.data
        })
    })
    // 素材下载
    http(API.material).then(res=>{
        // console.log(res.data.data);
        this.setData({
            material:res.data.data
        })
    })
   

  },
  getUserProfile(e) {
    
  },
  getUserInfo(e) {
   
    
  },
  bindtouchstart(){
    console.log(123);
  }
})
