var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {nodeIntegration: true}
    })

    mainWindow.webContents.openDevTools()

    mainWindow.loadFile('index.html')

    // BrowserView
    var BrowserView = electron.BrowserView
    var view = new BrowserView()

    mainWindow.setBrowserView(view)

    view.setBounds({x:0,y:120, width: 1000, height: 680})
    view.webContents.loadURL('https://jspang.com')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})