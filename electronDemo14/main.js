var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null

var globalShortcut = electron.globalShortcut

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 650,
        webPreferences: {nodeIntegration: true}
    })

    // 注册全局快捷键
    globalShortcut.register('ctrl+e', function(){
        mainWindow.loadURL('https://github.com/xxzzll')
    })

    // 全局快捷键是否注册成功
    let isRegister = globalShortcut.isRegistered('ctrl+e')?'register success!':'register fail!'
    console.log(isRegister)

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})

// app 将要退出时，处理逻辑
app.on('will-quit', ()=>{
    // 注销指定快捷键
    globalShortcut.unRegister('ctrl+e')
    // 注销全部快捷键
    globalShortcut.unregisterAll()
})