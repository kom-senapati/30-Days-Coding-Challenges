// Problem: Express WebSocket Integration

// Problem Statement: Extend an existing Express application to include WebSocket support. Create a WebSocket server that echoes back any message it receives from a client. Implement an endpoint "/websocket" that serves an HTML page with JavaScript to establish a WebSocket connection.

/**
 * WebSocket server for Express
 * @param {Object} server - HTTP server instance
 */
function setupWebSocket(server) {
    const wss = new WebSocket.Server({ server });
    wss.on('connection', function connection(ws) {
        console.log('A new client connected.');
        ws.on('message', function incoming(message) {
            console.log('Received message:', message.toString());
            ws.send(message);
        });
    });
}

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
app.get('/websocket', (req, res) => {
    res.sendFile(__dirname + '/public/websocket.html');
});
setupWebSocket(server);
server.listen(3001, () => {
    console.log(`Server listening on port 3001 ...`);
});