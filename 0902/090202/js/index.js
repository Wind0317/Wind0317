var musicControl = {
    dom: {
        bgm: document.getElementById("bgm"),
        musicImg: document.getElementById("musicImg"),
        currentTimeSpan: document.querySelector('.current-time-span'),
        durationSpan: document.querySelector('.duration-span'),
        progressBox: document.querySelector('.progress-box'),
        lrc: document.querySelector('.lrc'),
    },
    data: {
        lrcTime: [],
        lrcContent: lrc.match(/(?<=\]).*/g),
    },
    formatTime: function (time) {
        var min = parseInt(time / 60).toString().padStart(2, '0');
        var sec = parseInt(time % 60).toString().padStart(2, '0');
        return min + ':' + sec;
    },
    bindEvent: function () {
        var that = this;
        this.dom.bgm.addEventListener('canplay', function (event) {
            // console.log(event);
            that.dom.durationSpan.innerText = that.formatTime(that.dom.bgm.duration);
        });
        //开始播放时让图片开始旋转
        this.dom.bgm.addEventListener('playing', function (event) {
            that.dom.musicImg.dataset.aniState = '1';
        });
        // 暂停时让图片动画停止播放
        this.dom.bgm.addEventListener('pause', function (event) {
            that.dom.musicImg.dataset.aniState = '0';
        });

        //给图片添加click事件，控制音乐播放和暂停
        this.dom.musicImg.addEventListener('click', function (event) {
            if (that.dom.bgm.paused) {
                that.dom.bgm.play();
            } else {
                that.dom.bgm.pause();
            }
        });
        // 给进度条添加click事件，控制音乐播放到指定时间
        this.dom.progressBox.addEventListener('click', function (event) {
            var percent = event.offsetX / this.clientWidth;
            that.dom.bgm.currentTime = percent * that.dom.bgm.duration;
        });
        // 给音乐添加timeupdate事件，控制进度条的进度
        this.dom.bgm.addEventListener("timeupdate", function (event) {
            var currentTime = that.dom.bgm.currentTime;
            that.dom.currentTimeSpan.innerText = that.formatTime(currentTime);
            that.dom.progressBox.style.backgroundSize = currentTime / that.dom.bgm.duration * 100 + '%';
            // 显示歌词
            // 当前播放时间大于等于歌词时间，则显示歌词
            // console.log(currentTime);
            for (var i = 0; i < that.data.lrcTime.length; i++) {
                // 但是当前播放时间小于歌词时间，则不显示歌词
                if (currentTime < that.data.lrcTime[i]) {
                    if (i == 0) {
                        that.dom.lrc.innerText = that.data.lrcContent[i];
                    } else if (i == that.data.lrcTime.length - 1) {
                        that.dom.lrc.innerText = that.data.lrcContent[i];
                    } else {
                        that.dom.lrc.innerText = that.data.lrcContent[i - 1];
                    }
                    // console.log(that.data.lrcContent[i - 1]);
                    break;
                }
            }
        });
        // 给左右键添加事件，控制音乐的快进与后退
        document.addEventListener('keydown', function (event) {
            console.log(event);
            if (!event.repeat) {
                switch (event.keyCode) {
                    case 37: // left
                        if (that.dom.bgm.currentTime > 5) {
                            that.dom.bgm.currentTime -= 5;
                        } else {
                            that.dom.bgm.currentTime = 0;
                        }
                        break;
                    case 39: // right
                        if (that.dom.bgm.currentTime < that.dom.bgm.duration - 5) {
                            that.dom.bgm.currentTime += 5;
                        }
                        else {
                            that.dom.bgm.currentTime = that.dom.bgm.duration;
                        }
                        break;
                    // 给空格键添加事件，控制音乐的播放与暂停
                    case 32: // space
                        if (that.dom.bgm.paused) {
                            that.dom.bgm.play();
                        }
                        else {
                            that.dom.bgm.pause();
                        }
                        break;
                }
            }
        });
    },
    getLrcTime: function () {
        var reg = /(?<=\[)(\d{2}):(\d{2}\.\d{3})(?=\])/g;
        var result = reg.exec(lrc);
        while (result) {
            // console.log(result);
            this.data.lrcTime.push(result[1] * 60 + +result[2]);
            result = reg.exec(lrc);
        }
    },
    getLrcContent: function () {
        this.data.lrcContent = lrc.match(/(?<=\]).*/g)
    },
    Init: function () {
        this.bindEvent();
        this.getLrcTime();
        // this.getLrcContent();
    },
}
musicControl.Init();