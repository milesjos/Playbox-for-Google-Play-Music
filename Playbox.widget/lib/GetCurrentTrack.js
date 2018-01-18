const fs = require('fs')
const os = require('os')
const file = os.homedir() + '/Library/Application Support/Google Play Music Desktop Player/json_store/playback.json'

fs.readFile(file, 'utf8', function (err, contents) {
  if (err) {
    console.error(err)
  } else {
    let vals = JSON.parse(contents)
    if (vals['playing'] === true) {
      console.log(contents)
    }
  }
})
