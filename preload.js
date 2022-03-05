window.exports = {
    "winpath2wslpath": { 
       mode: "none",  
       args: {
          enter: (action) => {
             var path = ""
             var windowsre = /[A-Z]:.+/
             if(action.type == "files"){
                path = action.payload[0].path
             }
             if(action.type == "text" || action.type == "regex" || action.type == "over"){
                path = action.payload
             }
             if(action.code == "winpath2wslpath") {
                if(path.match(windowsre)){
                    path = path.replace(/\\/g, "/")
                    var c = path.charAt(0)
                    path = "/mnt/" + (c+"").toLowerCase() + path.substring(2)
                }
             }
             utools.copyText(path)
             window.utools.hideMainWindow()
             window.utools.outPlugin()
          }  
       } 
    },
    "wslpath2winpath": { 
       mode: "none",  
       args: {
          enter: (action) => {
             var path = ""
             var wslre = new RegExp("/mnt/.+")
             if(action.type == "text" || action.type == "regex" || action.type == "over"){
                path = action.payload
             }
             if(path.match(wslre)){
                 path = path.substring(5)
                 var c = path.charAt(0)
                 path = (c+":").toUpperCase() + path.substring(1)
                 path = path.replace(/\//g, "\\")
             }
             utools.copyText(path)
             window.utools.hideMainWindow()
             window.utools.outPlugin()
          }  
       } 
    }
 }
