#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '@s/app';

//var debug = require('debug')('p022-projnotes:server');
// importamos primero el debug y el la segunda parte se iso el const

import Debug from 'debug'
import http  from 'http'
// creando instancia de debugger
const debug = Debug ('p022-projnotes:server');

/**
 * Get port from environment and store in Express.
 */


const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
//pr q server es una instancia que nunca va a cambiar
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error (`${bind}  requieres elevated privileges` );
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already is use` );
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe  ${addr}` : ` port $
    {addr.port}`;
debug(`Listening on  ${bind} `);
console.log(`servidor escuchando  ${app.get("port")} `);
}
