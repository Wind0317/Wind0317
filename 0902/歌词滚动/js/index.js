var lrcObj = {
    dom: {
        lrcBox: document.querySelector(".lrc-box"),
        musicplay: document.querySelector("#musicplay"),
        lrcInnerBox: document.querySelector(".lrc-inner-box"),
    },
    data: {
        lrcTimeArr: [],
        lrcContentArr: musicLrc.match(/(?<=\]).*/g),
        htmlStr: '',
        currentIndex: 0,
    },
    bindEvent: function () {
        var that = this;
        this.dom.musicplay.addEventListener("timeupdate", function () {
            var totalTime = that.dom.musicplay.duration;
            var currentTime = that.dom.musicplay.currentTime;
            var percent = currentTime / totalTime;
            var lrcTop = that.dom.lrcInnerBox.offsetHeight * percent;
            // console.log(that.dom.lrcInnerBox.style.transform);
            that.dom.lrcInnerBox.style.transform = "translateY(-" + lrcTop + "px)";
            that.dom.lrcInnerBox.children[that.data.currentIndex].classList.remove("active");
            that.data.currentIndex = that.getIndexLrc(currentTime);
            that.dom.lrcInnerBox.children[that.data.currentIndex].classList.add("active");
        });
        // // 给lrcBox绑定鼠标滚轮事件
        // this.dom.lrcBox.addEventListener("scroll", function (e) {
        //     console.log(e);
        //     // 根据上一次的transform的大小来增加或减少
        //     var lastTransform = that.dom.lrcInnerBox.style.transform;
        //     var lastTransformNum = lastTransform.match(/(?<=\().*(?=px\))/g)[0];
        //     var currentTransformNum = lastTransformNum - e.deltaY;
        //     that.dom.lrcInnerBox.style.transform = "translateY(" + currentTransformNum + "px)";
        //     // 同时设置歌词的播放位置
        //     var percent = currentTransformNum / that.dom.lrcInnerBox.offsetHeight;
        //     that.dom.musicplay.currentTime = that.dom.musicplay.duration * percent;
        // });
    },
    getLrcTimeArr: function () {
        var reg = /(?<=\[)(\d{2}):(\d{2}\.\d{3})(?=\])/g;
        var result = reg.exec(musicLrc);
        while (result) {
            this.data.lrcTimeArr.push(result[1] * 60 + +result[2]);
            result = reg.exec(musicLrc);
        }
    },
    getHtml: function () {
        this.data.htmlStr = template("template01", {
            lrcArr: this.data.lrcContentArr
        })
        this.dom.lrcInnerBox.innerHTML = this.data.htmlStr;
    },
    getIndexLrc: function (currentTime) {
        for (var i = 0; i < this.data.lrcTimeArr.length; i++) {
            if (currentTime < this.data.lrcTimeArr[i]) {
                if (i == 0) {
                    return 0;
                } else if (i == this.data.lrcContentArr.length - 1) {
                    return this.data.lrcContentArr.length - 1;
                } else {
                    return i - 1;
                }
            }
        }
    },
    addLrcClassName: function (index) {
        for (var i = 0; i < this.dom.lrcInnerBox.children.length; i++) {
            this.dom.lrcInnerBox.children[i].classList.remove("active");
        }
        this.dom.lrcInnerBox.children[index].classList.add("active");
    },
    init: function () {
        this.bindEvent();
        this.getLrcTimeArr();
        this.getHtml();
    }
}

lrcObj.init();
console.log(lrcObj);