
// You should probably npm install ws!
// Import ws
// Create a new WebSocketServer

const ws = require('ws');
const PORT = 8080;
let wsServer;

function broadcast (message) {
    wsServer.clients.forEach((client)=>{
        client.send(message);
    })
}

function init(callback) {
    wsServer =  new ws.Server({ port: PORT });
    wsServer.on('connection', (socket) => {

  })
}

module.exports = {
  broadcast: broadcast,
  init: init
};