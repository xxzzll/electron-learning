const btn = this.document.querySelector('#btn')

const BrowserWindow = require('electron').remote.BrowserWindow // 主进程窗口

var newWin = null

window.onload = function() {

    btn.onclick = ()=>{
        newWin = new BrowserWindow({
            width: 300,
            height: 400
        })
    
        newWin.loadFile('newWin.html')
    
        newWin.on('closed', ()=>{
            newWin = null // 窗口关闭时，对象引用置空
        })
    }
}