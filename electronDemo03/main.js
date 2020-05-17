var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow

var mainWindow = null;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        webPreferences: {nodeIntegration: true} // 增加全量使用nodejs设置
    })

    mainWindow.loadFile('index.html') // 加载渲染 HTML 文件

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})