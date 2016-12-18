#!/usr/bin/env node

const yakiusay = require('.');
const cli = require('meow')(`
  Usage
    $ yakiusay <input>

  Options
    -h --help  Show help

  Examples
    $ yakiusay せやな
`, {
  alias: {
    h: 'help'
  }
});

if (cli.flags.h) {
  console.log(cli.help);
  return;
}

if (!cli.input[0]) {
  console.log(yakiusay('Write something!'));
  return;
}

console.log(yakiusay(cli.input[0]));
