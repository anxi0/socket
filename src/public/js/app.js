const ws = new WebSocket(`ws://${window.location.host}`);

ws.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

ws.addEventListener("message", (message) => {
  console.log(`Message from server : ${message.data}`);
});

ws.addEventListener("close", () => {
  console.log("Disconnected to Server ❌");
});

setTimeout(() => {
  ws.send("I'm browser!");
}, 1000);
