var BB = require("bluebird");

function PingPong() {}

PingPong.prototype.ping = BB.coroutine(function* (val) {
  console.log("Ping?", val);
  yield BB.delay(500);
  this.pong(val + 1);
});

PingPong.prototype.pong = BB.coroutine(function* (val) {
  console.log("Pong!", val);
  yield BB.delay(500);
  this.ping(val + 1);
});

var a = new PingPong();
a.ping(0);
