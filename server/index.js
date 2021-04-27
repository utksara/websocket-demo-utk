const websocket = require("ws");

const wss  = new websocket.Server({port : 8082});

var exec = require('child_process').exec, child;

wss.on("connection" , ws => {
    console.log("New Cleint connected");
     
    ws.on("close", () => {
        console.log("cleint has disconnected");
    })
    child = exec('python3 /mnt/8ADCEC41DCEC2961/Python/Games/Honeybee_simulator/main.py',
    function (error, stdout, stderr) {
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
    child();
});
