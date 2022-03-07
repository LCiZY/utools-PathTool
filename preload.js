window.exports = {
   "winpath2wslpath": {
      mode: "none",
      args: {
         enter: (action) => {
            var path = ""
            var windowsre = /[A-Z]:.+/
            if (action.type == "files" || action.type == "directory") {
               path = action.payload[0].path
            }
            if (action.type == "regex") {
               path = action.payload
            }
            if (path.match(windowsre)) {
               path = path.replace(/\\/g, "/")
               var c = path.charAt(0)
               path = "/mnt/" + (c + "").toLowerCase() + path.substring(2)
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
            if (action.type == "regex") {
               path = action.payload
            }
            if (path.match(wslre)) {
               path = path.substring(5)
               var c = path.charAt(0)
               path = (c + ":").toUpperCase() + path.substring(1)
               path = path.replace(/\//g, "\\")
            }
            utools.copyText(path)
            window.utools.hideMainWindow()
            window.utools.outPlugin()
         }
      }
   },
   "filepath": {
      mode: "none",
      args: {
         enter: (action) => {
            var path = ""
            if (action.type == "files" || action.type == "directory") {
               path = action.payload[0].path
            }
            utools.copyText(path)
            window.utools.hideMainWindow()
            window.utools.outPlugin()
         }
      }
   },
   "filename": {
      mode: "none",
      args: {
         enter: (action) => {
            var path = ""
            if (action.type == "files" || action.type == "directory") {
               path = action.payload[0].path
            }
            path = path.substring(path.lastIndexOf((process.platform === 'win32' || process.platform === 'win64') ? "\\" : "/") + 1)
            if (action.type == "files") {
               var dotidx = path.lastIndexOf(".")
               if (dotidx != -1 && dotidx != path.length - 1) {
                  path = path.substring(0, dotidx)
               }
            }
            utools.copyText(path)
            window.utools.hideMainWindow()
            window.utools.outPlugin()
         }
      }
   },
   "filename_with_suffix": {
      mode: "none",
      args: {
         enter: (action) => {
            var path = ""
            if (action.type == "files") {
               path = action.payload[0].path
            }
            path = path.substring(path.lastIndexOf((process.platform === 'win32' || process.platform === 'win64') ? "\\" : "/") + 1)
            utools.copyText(path)
            window.utools.hideMainWindow()
            window.utools.outPlugin()
         }
      }
   },
   "forward_slash_2_back": {
      mode: "none",
      args: {
         enter: (action) => {
            var path = ""
            if (action.type == "regex") {
               path = action.payload
            }
            path = path.replace(/\//g, "\\")
            utools.copyText(path)
            window.utools.hideMainWindow()
            window.utools.outPlugin()
         }
      }
   },
   "back_slash_2_forward": {
      mode: "none",
      args: {
         enter: (action) => {
            var path = ""
            if (action.type == "regex") {
               path = action.payload
            }
            path = path.replace(/\\/g, "/")
            utools.copyText(path)
            window.utools.hideMainWindow()
            window.utools.outPlugin()
         }
      }
   }
}
