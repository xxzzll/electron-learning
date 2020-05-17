const { shell } = require('electron')

var aHref = this.document.querySelector("#aHref")

aHref.onclick = function(e){
    e.preventDefault()
    
    var href = this.getAttribute('href')

    shell.openExternal(href) // 使用外部浏览器打开超链接
}
