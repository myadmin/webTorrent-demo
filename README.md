首先，要全局安装supervisor，作用是开发的时候热重启
npm install supervisor -g

然后，开发时运行如下代码，即可打开服务器，服务器运行在3000端口
npm run start_dev
需要开启代码检测，才能实时改变页面显示
webpack --watch

根目录下有两个可以启动应用的文件
项目打包：num run build

关于目录结构的说明
1.public里面放的是server端需要的静态文件


打包生成的 dist 文件夹需要上传到服务器中
