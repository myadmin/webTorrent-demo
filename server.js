//LeanEngine启动所需的配置

'use strict';
let AV = require('leanengine');

AV.init({
    appId: process.env.LEANCLOUD_APP_ID || '43ErKK5cM1M6K1ShXFJQRqE2-gzGzoHsz',
    appKey: process.env.LEANCLOUD_APP_KEY || 'oN7218Lkutd0zqBMI06vKC6U',
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '9NsvzREuHjJoOnxaA95kSuXA'
});

let app = require('./app');
// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
let PORT = parseInt(3000);
app.listen(PORT, function () {
    console.log('Node app is running, port:', PORT);
    // 注册全局未捕获异常处理器
    process.on('uncaughtException', function(err) {
        console.error("Caught exception:", err.stack);
    });
    process.on('unhandledRejection', function(reason, p) {
        console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
    });
});
