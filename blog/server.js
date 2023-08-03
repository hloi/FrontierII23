const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 12345 });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    console.log('Received data:', message);

    // Send a response back to the client
    const response = 'Message received successfully!';
    ws.send(response);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is listening...');