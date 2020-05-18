var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {nodeIntegration: true}
    })

    mainWindow.webContents.openDevTools()

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})