const {remote} = require('electron') // 引入 remote 模块

// 创建右键菜单模板
var rightTemplate = [
    {label: '粘贴', accelerator: 'ctrl+v'},
    {label: '复制', accelerator: 'ctrl+c'}
]

// 使用主进程对象
var m = remote.Menu.buildFromTemplate(rightTemplate)

// 右击事件
window.addEventListener('contextmenu', (e)=>{
    e.preventDefault()
    m.popup({window:remote.getCurrentWindow()})
})