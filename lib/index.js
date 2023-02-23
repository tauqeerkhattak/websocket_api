import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', async function message(data) {
        setTimeout(() => {
            ws.send("Hello, " + data);
        }, 5000,);
    });
});
