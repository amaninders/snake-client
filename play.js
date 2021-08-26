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

  return conn;

};

console.log('connecting...');
connect();