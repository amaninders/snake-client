const net = require('net');
const { IP, PORT} = require('./constants')

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
		conn.write('Name: APS')
	})

	
  return conn;

};

console.log('connecting...');

module.exports = {
  connect
};