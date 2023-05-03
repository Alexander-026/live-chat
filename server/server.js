import express from 'express'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import cors from 'cors'
import http from 'http'



dotenv.config()
const app = express()
const server = http.Server(app)
const io = new Server(server, {
  cors: {
    origin: process.env.LOCALHOST,
    methods: ['GET', 'POST']
  }
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT

const dbChat = new Map([])

app.get('/rooms/:id', (req, res) => {
  const { id: roomId } = req.params
  const newDB = dbChat.has(roomId) ? {
    users: [...dbChat.get(roomId).get('users').values()],
    messages: [...dbChat.get(roomId).get('messages').values()],
  } : { users: [] }
  res.json(newDB)
})
app.post('/rooms', (req, res) => {
  const { roomId } = req.body
  if (!dbChat.has(roomId)) {
    dbChat.set(roomId, new Map([
      ['users', new Map()],
      ['messages', []]
    ]))
  }
  res.send()
})

io.on('connection', (socket) => {
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId)
    dbChat.get(roomId).get('users').set(socket.id, { name: userName, typing: false })
    const users = [...dbChat.get(roomId).get('users').values()]
    socket.in(roomId).emit('ROOM:SET_USERS', users)
  })

  socket.on('ROOM:TYPING', ({ roomId, users, userName, typing }) => {

    dbChat.forEach((value, id) => {
      value.get('users').set(socket.id, { name: userName, typing })
      const newUsers = [...value.get('users').values()]
      socket.in(id).emit('ROOM:TYPING', newUsers)
    })
    socket.in(roomId).emit('ROOM:TYPING', users)

  })

  socket.on('ROOM:SET_MESSAGE', ({ roomId, userName, text }) => {
    const newMes = {
      userName,
      text
    }
    dbChat.get(roomId).get('messages').push(newMes)
    socket.in(roomId).emit('ROOM:SET_MESSAGE', newMes)
  })

  socket.on('disconnect', () => {
    dbChat.forEach((value, id) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()]
        socket.in(id).emit('ROOM:SET_USERS', users)
      }
    })
  })

});


server.listen(PORT, (err) => {
  if (err) {
    throw Error(err)
  }
})