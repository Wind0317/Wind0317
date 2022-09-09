// http://192.168.90.1:8080/musicData/musicData.json

var musicBoxControl = {
    dom: {
        /** @type {HTMLUListElement} */
        musicList: document.querySelector('.music-list'),
        lrcBox: document.querySelector(".lrc-box"),
        /** @type {HTMLAudioElement} */
        musicplay: document.querySelector("#musicplay"),
        lrcInnerBox: document.querySelector(".lrc-inner-box"),
        /** @type {HTMLDivElement} */
        leftMenu: document.querySelector(".left-menu"),
        /** @type {HTMLImageElement} */
        menu: document.querySelector("#menu"),
        durationBox: document.querySelector(".duration-box"),
        currentTimeBox: document.querySelector(".current-time-box"),
        /** @type {HTMLDivElement} */
        progress: document.querySelector(".progress"),
    },
    data: {
        APIURL: "http://www.softeem.xin:8888/public/musicData/musicData.json",
        BASEURL: "http://192.168.90.1:8080/musicData/",//http://www.softeem.xin:8888/public/musicData/
        musicData: [],
        lrcTimeArr: [],
        lrcContentArr: [],
        _currentIndex: 0,
        lrcCurrentIndex: 0,
    },
    bindEvent: function () {
        var that = this;
        // this.dom.musicList.addEventListener('click', function (e) {
        //     if (e.target.matches('.music-list-item')) {
        //         var index = e.target.dataset.index;
        //         var music = musicBoxControl.data.musicData[index];
        //         musicBoxControl.getLrc(music.lrcText);
        //         that.data.currentIndex = index;
        //     }
        // });
        this.dom.menu.addEventListener('click', function (e) {
            that.dom.leftMenu.dataset.show = that.dom.leftMenu.dataset.show ^ 1;
        });
        this.dom.musicplay.addEventListener("canplay", function () {
            that.dom.durationBox.innerText = that.formatTime(that.dom.musicplay.duration);
            that.RenderTemplate(".lrc-inner-box", "template01", { lrcArr: that.data.lrcContentArr });
            that.dom.musicplay.play();
            // that.dom.currentTimeBox.innerText = that.formatTime(this.currentTime);
        })
        this.dom.progress.addEventListener("click", function (e) {
            that.dom.musicplay.currentTime = e.offsetX / this.offsetWidth * that.dom.musicplay.duration;
        })
        this.dom.musicplay.addEventListener("timeupdate", function () {
            var totalTime = that.dom.musicplay.duration;
            var currentTime = that.dom.musicplay.currentTime;
            var percent = currentTime / totalTime;
            that.dom.currentTimeBox.innerText = that.formatTime(currentTime);
            that.dom.progress.style.backgroundSize = percent * 100 + "%";
            // console.log(that.data.lrcCurrentIndex);
            // that.dom.lrcInnerBox.children[that.data.lrcCurrentIndex].classList.remove("active");
            that.data.lrcCurrentIndex = that.getIndexLrc(currentTime);
            var lrcTop = that.dom.lrcInnerBox.children[that.data.lrcCurrentIndex].offsetTop;
            // console.log(that.dom.lrcInnerBox.style.transform);
            that.dom.lrcInnerBox.style.transform = "translateY(-" + lrcTop + "px)";
            // that.dom.lrcInnerBox.children[that.data.lrcCurrentIndex].classList.add("active");
            that.addLrcClassName(that.data.lrcCurrentIndex);
        });
    },
    /**
     * @description 格式化时间
     * @param {number|string} time 
     * @returns {string} 格式化后的时间
     */
    formatTime: function (time) {
        var min = parseInt(time / 60);
        var sec = parseInt(time % 60);
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");
        return min + ":" + sec;
    },
    /**
     * @description:获取音乐数据
     * @param {*}
     * @return {*}
     * @Author: Wind0317
     */
    getMusicData: function () {
        var url = "http://www.softeem.xin:8888/public/musicData/";
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.data.APIURL, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // JSON.parse(xhr.responseText).forEach(function (item) {
                //     var obj = {
                //         picPath: url + item.picPath,
                //         lrcPath: url + item.lrcPath,
                //         lrcText: item.lrcText,
                //         musicPath: url + item.musicPath,
                //         musicName: item.musicName,
                //     }
                //     musicBoxControl.data.musicData.push(obj);
                // });
                localStorage.setItem("musicData", xhr.responseText);
                musicBoxControl.data.musicData = JSON.parse(xhr.response);
                musicBoxControl.RenderTemplate(".music-list", "template", {
                    data: musicBoxControl.data.musicData,
                    BASEURL: musicBoxControl.data.BASEURL
                });
                musicBoxControl.bindEvent();
                console.log("渲染并绑定事件完成");
            }
        }
    },
    /**
     * @description:渲染页面
     * @param {target,templateId,data}
     * @return {void}
     */
    RenderTemplate: function (target, templateId, data) {
        // console.log(data);
        var html = template(templateId, data);
        document.querySelector(target).innerHTML = html;
    },
    getLrc: function (musicLrc) {
        this.data.lrcTimeArr = [];
        var reg = /(?<=\[)(\d{2}):(\d{2}\.\d{3})(?=\])/g;
        var result = reg.exec(musicLrc);
        while (result) {
            this.data.lrcTimeArr.push(result[1] * 60 + +result[2]);
            result = reg.exec(musicLrc);
        }
        this.data.lrcContentArr = musicLrc.match(/(?<=\]).*/g);
    },
    getIndexLrc: function (currentTime) {
        for (var i = 0; i < this.data.lrcTimeArr.length; i++) {
            if (currentTime < this.data.lrcTimeArr[i]) {
                if (i == 0) {
                    return 0;
                } else if (i == this.data.lrcTimeArr.length - 1) {
                    return this.data.lrcTimeArr.length - 1;
                } else {
                    return i - 1;
                }
            }
        }
    },
    addLrcClassName: function (index) {
        // console.log(index);
        for (var i = 0; i < this.dom.lrcInnerBox.children.length; i++) {
            this.dom.lrcInnerBox.children[i].classList.remove("active");
        }
        this.dom.lrcInnerBox.children[index].classList.add("active");
    },
    init: function () {
        var musicData = localStorage.getItem("musicData");
        if (musicData) {
            // this.getMusicData();
            // this.bindEvent();
            musicBoxControl.data.musicData = JSON.parse(musicData);
            musicBoxControl.RenderTemplate(".music-list", "template", {
                data: musicBoxControl.data.musicData,
                BASEURL: musicBoxControl.data.BASEURL
            });
            musicBoxControl.bindEvent();
            console.log("渲染并绑定事件完成");
        } else {
            this.getMusicData();
        }
    }
}

Object.defineProperty(musicBoxControl.data, "currentIndex", {
    get: function () {
        return this._currentIndex;
    },
    set: function (value) {
        musicBoxControl.dom.musicList.children[this.currentIndex].classList.remove("play");
        if (/^(-)?\d+$/.test(value)) {
            var v;
            if (value < 0) {
                v = this.musicData.length - 1;
            } else if (value > this.musicData.length - 1) {
                v = 0;
            } else {
                v = value;
            }
            this._currentIndex = v;
            musicBoxControl.dom.musicList.children[this.currentIndex].classList.add("play");
            var musicItem = musicBoxControl.data.musicData[v];
            musicBoxControl.getLrc(musicItem.lrcText);
            musicBoxControl.dom.musicplay.src = musicBoxControl.data.BASEURL + musicItem.musicPath;
        }
        else {
            throw new Error("currentIndex必须是数字");
        }
    }
});
musicBoxControl.init();