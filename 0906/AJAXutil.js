
// 封装XHR对象
var AJAX = {
  // 创建XHR对象
  createXHR: function () {
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
  },
  // 发送请求
  sendRequest: function (url, callback, method, data) {
    var xhr = this.createXHR();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    };
    if (method == "get" || method == "GET") {
      xhr.open(method, url + "?" + data, 'true');
      xhr.send(null);
    } else if (method == "post" || method == "POST") {
      xhr.open(method, url, 'true');
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(data);
    }
  },
  // 封装get请求
  get: function (url, data, callback) {
    this.sendRequest(url, callback, "get", data);
  },
  // 封装post请求
  post: function (url, data, callback) {
    this.sendRequest(url, callback, "post", data);
  }
}
