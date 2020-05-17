var electron = require('electron')

var app = electron.app // 引入 app
var BrowserWindow = electron.BrowserWindow // 引入 窗口
var mainWindow = null // 声明要打开的 主窗口

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width:300,
        height:400,
        webPreferences: {nodeIntegration: true} // 增加全量使用nodejs设置
    })
    mainWindow.loadFile('index.html') // 加载 html 页面
    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})