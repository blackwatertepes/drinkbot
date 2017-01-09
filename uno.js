var five = require('johnny-five');

var board = new five.Board({repl: false});

board.on("ready", function(){
  console.log('[Arduino] Ready!')

  readyLed = new five.Led(2);
  readyLed.blink(1000);
});

function pump(id, ms){
  startPump(id);
  setTimeout(function () {
    stopPump(id);
  }, parseInt(ms));
}

function startPump(id){
  console.log(`[Arduino] Starting pump ${id}`);
  getPump(parseInt(id)).on();
}

function stopPump(id){
  console.log(`[Arduino] Stopping pump ${id}`);
  getPump(parseInt(id)).off();
}

function getPump(n){
  return new five.Led(getPin(n));
}

function getPin(n){
  switch(n){
    case 0: return 4;
    case 1: return 7;
    case 2: return 8;
  }
}

module.exports = {
  pump: pump
}
