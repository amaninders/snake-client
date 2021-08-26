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

	const keyMap = {
		'\u0077': 'Move: up',
		'\u0061': 'Move: left',
		'\u0073': 'Move: down',
		'\u0064': 'Move: right',
		'\u0070': 'Say: Run!!!',
		'\u006F': 'Say: Coming for you!!!',	
	}

	if (key in keyMap) {
		connection.write(`${keyMap[key]}`)
	}
};

module.exports = {
	setupInput
}