var DouYin = {
    dom: {
        videoList: [],
        swiperWrapper: document.querySelector('.swiper-wrapper'),
    },
    data: {
        videoList: BGGVideoList,
        mySwiper: null,
    },
    bindEvent: function () {
        var that = this;
        // 点击播放视频或者暂停视频
        this.dom.swiperWrapper.addEventListener("click", function (e) {
            var target = e.target;
            // console.log(target);
            if (target.matches('.video-item')) {
                if (target.paused) {
                    target.play();
                } else {
                    target.pause();
                }
            }
        }, false);
        // 给键盘添加事件
        document.addEventListener("keydown", function (e) {
            var keyCode = e.keyCode;
            console.log(keyCode);
            switch (keyCode) {
                case 38:
                    that.data.mySwiper.slidePrev();//上
                    break;
                case 40:
                    that.data.mySwiper.slideNext();//下
                    break;
                case 32:
                    if (that.dom.videoList[that.data.mySwiper.activeIndex].paused) {
                        that.dom.videoList[that.data.mySwiper.activeIndex].play();
                    } else {
                        that.dom.videoList[that.data.mySwiper.activeIndex].pause();
                    }
                default:
                    break;
            }
        }, false);
    },
    renderTemplate: function (selector, templateId, data) {
        document.querySelector(selector).innerHTML = template(templateId, { list: data });
    },
    init: function () {
        var that = this;
        // 渲染视频列表
        this.renderTemplate('.swiper-wrapper', 'myswiper', this.data.videoList);
        // 当渲染完成后再获取dom
        this.dom.videoList = document.querySelectorAll('.video-item');
        // 初始化swiper
        this.data.mySwiper = new Swiper('.swiper', {
            direction: 'vertical', // 垂直切换选项
            // loop: true, // 循环模式选项
            mousewheel: true, // 鼠标滚轮控制
            on: {
                slideChange: function () {
                    console.log(this.activeIndex);
                    that.videoChange(this.activeIndex);
                },

            },
            lazy: {
                loadPrevNext: true,//懒加载前后的slide
            },
        });
        this.bindEvent();
    },
    videoChange: function (activeIndex) {
        var that = this;
        this.dom.videoList.forEach(function (item, index) {
            if (index == activeIndex) {
                item.play();
            } else {
                item.pause();
            }
        });
    }
}

DouYin.init();
console.log(DouYin);