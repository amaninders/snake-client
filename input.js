const { KEYMAP } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
	stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
	
	if (key === '\u0003') {
		process.exit();
  }
	
	if (key in KEYMAP) {
		connection.write(`${KEYMAP[key]}`)
	}
};

module.exports = {
	setupInput
}