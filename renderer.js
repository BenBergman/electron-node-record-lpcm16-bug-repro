// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var record = require("node-record-lpcm16")
var fs = require('fs')

setTimeout(function() {
    var file = fs.createWriteStream('/tmp/test.wav', { encoding: 'binary' })

    record.start({
      verbose: true
    })
    .pipe(file)
  }, 2000)
