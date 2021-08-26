const net = require('net');
const { IP, PORT, NAME} = require('./constants')

// make a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setDefaultEncoding('utf-8');

  conn.on('data', message => {
    console.log(`message from server: ${message}`);
  });

	conn.on('connect', () => {
		console.log(`connected to the server`);
		conn.write(`Name: ${NAME}`)
	})
	
  return conn;

};

console.log("Connecting ...");

module.exports = {
  connect
};