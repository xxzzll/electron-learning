const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        webPrefrences: {nodeIntegration: true}
    })

    require('./main/menu.js')

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})