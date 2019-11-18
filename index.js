#!/usr/bin/env node
const program = require('commander');
var process1 = require('child_process');

program.version('1.1.9', '-v, --version')
  .command('init <name>')
  .action((name) => {
    console.log('clone template ...');
    process1.exec('git clone https://github.com/ainama/ainama-react.git ' + name, (error, stdout, stderr) => {
      if (error !== null) {
        console.log('exec error: ' + error);
        return;
      }
      console.log(stdout);
      console.log('clone success');
    });
  });
program.parse(process.argv);
