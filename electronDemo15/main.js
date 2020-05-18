var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow
var mainWindow = null

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 650,
        webPreferences: {nodeIntegration: true} // 允许 electron 中使用 node
    })

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})