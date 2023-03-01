// pages/tutorial/tutorial.js
const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        material:"",
        groupList:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 搜索列表
        http(API.series).then(res => {
                // console.log(res.data.data);
                this.setData({
                    material: res.data.data
                })
           
            }),
            // 更多筛选
            http(API.courseGroupList).then(res => {
                this.setData({
                    groupList: res.data.course_subjects
                })
            })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})