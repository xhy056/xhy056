// components/navigation/navigation.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        // 自动播放
        autoplay: true,
        // 纵向
        vertical: true,
        // 自动切换时间
        interval: 2000,
        // 轮播
        carousel: 1,
        // 控制播放列表展开还是关闭
        isOpen: false,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 打开/关闭列表
        changeIsOpen() {
            this.setData({
                isOpen: !this.data.isOpen
            })
        },
    }
})