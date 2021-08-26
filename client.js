const net = require('net');

// make a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setDefaultEncoding('utf-8');

  conn.on('data', message => {
    console.log(`message from server: ${message}`);
  });

	conn.on('connect', () => {
		console.log(`connected to the server`);
		conn.write(`Name: ANK`)
	})

  return conn;

};

console.log('connecting...');

module.exports = {
  connect
};