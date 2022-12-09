const ws = require("nodejs-websocket");
const server = ws.createServer(function (socket) {
    // 读取字符串消息，事件名称为:text
    var count = 1;
    socket.on("text", function (str) {
        // 在控制台输出前端传来的消息
        console.log(str);
        //向前端回复消息
        socket.sendText("服务器端收到客户端发来的消息" + str + count++);
    });

    socket.on("error", () => {
        console.log("err");
    });
    socket.on("close", () => {
        console.log("close");
    });
    socket.on("connect", () => {
        console.log("connect");
    });
    socket.on("open", () => {
        console.log("open");
    });
    socket.on("message", () => {
        console.log("message");
    });
    socket.on("binary", () => {
        console.log("binary");
    });
    socket.on("pong", () => {
        console.log("pong");
    });
    socket.on("ping", () => {
        console.log("ping");
    });
    
});

server.listen(3000, () => {
    console.log("初始化监听端口3000");
});