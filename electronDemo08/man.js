var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 650,
        webReferences: {nodeIntegration: true}
    })

    mainWindow.openDevTools()

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})