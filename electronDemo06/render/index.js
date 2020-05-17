const { shell } = require('electron')

var aHref = this.document.querySelector("#aHref")

aHref.onclick = function(e){
    e.preventDefault()
    
    var href = this.getAttribute('href')

    shell.openExternal(href)
}
