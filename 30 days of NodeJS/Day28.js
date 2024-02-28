// WebSocket Integration

// Problem Statement: You are developing a real-time collaborative editing tool using Node.js and Express. You need to integrate WebSocket functionality to allow users to see changes made by others in real-time. Design a solution to establish WebSocket connections, handle incoming messages, and broadcast changes to all connected clients efficiently.

function setupWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });
    const clients = new Set();

    wss.on('connection', (ws) => {
        clients.add(ws);
        console.log('Client connected✅');

        ws.on('message', (message) => {
            message = JSON.parse(message)
            console.log('Received message:', message);
            broadcast(message);
        });

        ws.on('close', () => {
            clients.delete(ws);
            console.log('Client disconnected❌');
        });
    });

    function broadcast(message) {
        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
}

const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
setupWebSocketServer(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/day28.html');
});
server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
