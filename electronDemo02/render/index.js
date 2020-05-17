var fs =  require('fs') // 读取文件模块

window.onload = function(){
    var btn = this.document.querySelector("#btn")
    var bcontext = this.document.querySelector("#bcontext")
    btn.onclick = function(){
        fs.readFile("xiaojiejie.txt", (err,data) => {
            bcontext.innerHTML = data
        })
    }
}