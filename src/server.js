import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  console.log("client/Connected ✅");
  socket.send("Welcome to socket");

  socket.on("message", (message) =>
    console.log(`Message from client : ${message}`)
  );

  socket.on("close", () => console.log("client/Disconnected ❌"));
});

server.listen(PORT, console.log(`Listening on ${PORT}`));
