// setup for file system
const fs = require('fs');

// setup for directory
const dir = './logs';

const seperator = '=============';
// debug method
exports.debug = (data) => {
  // id debug mode equal true
  if (process.env.DEBUG) {
// if logs directories doesnt exist create a log directory

    if (!fs.existsSync(dir)) {
  // make logs directory folder
      fs.mkdir(dir);
      fs.writeFile('dir/err.log');

// else if logs directory does exist write
    } else if (fs.exists) {
      // write to existing file
      // writefile overwrites use appendfile
      fs.appendFile('logs/err.log', seperator + data + seperator, (err) => {
        if (err) throw error
        // let dev know file was sucessfully appended
        console.log('Error log sucessfully updated');
      });
    } // closing if folder existing
  } // closing if debug process
}; // closing debug method
