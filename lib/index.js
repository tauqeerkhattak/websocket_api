import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        const newNum = parseInt(data);
        console.log("Number is ", newNum);
        if (isPrime(newNum, newNum)) {
            ws.send(data+' is prime!');
        }
        else {
            ws.send(data+' is not prime!');
        }
    });
});

function isPrime(integer, original) {
    const newNum = integer - 1;
    if (newNum === 1) {
        return true;
    }
    else if (original % newNum === 0) {
        return false;
    }
    else {
        return isPrime(newNum, original);
    }
}
