// setup for file system
const fs = require('fs');

// setup for directory
const dir = '/.logs';

// debug method
exports.debug = () => {

  if(process.env.DEBUG) {


// if logs directories doesnt exist create a log directory
    if(!fs.existsSync(dir)){
      fs.mkdirSync(dir);
      fs.writefile('e.logs',)
// else if logs directory does exist write
    } else if (fs.existsSync) {
    // write to this file

    }





  }
}; // closing debug method
