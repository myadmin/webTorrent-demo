//LeanEngine启动所需的配置

'use strict';
let AV = require('leanengine');
//外国
/*AV.init({
    appId: process.env.LEANCLOUD_APP_ID || 'SceUIJ0ESp2dB0JGiYnrLKEj-MdYXbMMI',
    appKey: process.env.LEANCLOUD_APP_KEY || '48D0p3Kc3qJtuU9zHcDh1GGQ',
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'YPnxDbjyJzbUl5RFOaQHGLIm'
});*/

//中国
AV.init({
    appId: process.env.LEANCLOUD_APP_ID || 'UTAeNYuETt2KozYAIyt4dHWx-gzGzoHsz',
    appKey: process.env.LEANCLOUD_APP_KEY || '2VVg0WstAAIvH9Fq2gRgowex',
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'VO5uuHHH3nNcl6OJqoBjuwvs'
});


// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();
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
