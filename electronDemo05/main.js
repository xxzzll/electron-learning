var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        webPreferences: {nodeIntegration: true}
    })

    mainWindow.webContents.openDevTools() // 打开调试面板

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})