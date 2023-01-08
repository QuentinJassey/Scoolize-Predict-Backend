const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();

const cors = require("cors");

app.use(cors());
app.listen(8000, () => {
  console.log("express listening on port 8000");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: async (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
app.use(multer({ storage: storage }).array("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId == userId) &&
    users.push({ userId, socketId });
};

const remUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const findUser = (userId) => {
  return users.find((user) => user.userId == userId);
};
io.on("connection", (socket) => {
  console.log("user : " + socket.id + " connected");
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);

    console.log(users);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    // io.to(socket.id).emit(receiverId);

    let user = findUser(receiverId);

    console.log(user);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  socket.on("disconnect", () => {
    remUser(socket.id);
    console.log(users);
    io.emit("getUsers", users);
    console.log("user : " + socket.id + " disconnected");
  });
});

server.listen(8002, () => {
  console.log("listening on *:8002");
});
mongoose.connect(
  "mongodb+srv://EZ2C:zmld8OCVqJsZKrfe@cluster0.slggqd1.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("db connected");
  }
);

const { user } = require("./router/user");
app.use(user);
const { basicBlogFunc } = require("./router/basicBlogFunc");
app.use(basicBlogFunc);

const { ecoles } = require("./router/ecoles");
app.use(ecoles);
