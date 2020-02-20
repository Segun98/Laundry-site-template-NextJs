// const express = require('express');
// const next = require('next');
// const cors = require('cors');
// const sendMail = require('./mail');

// const PORT = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({
//     dir: ".",
//     dev
// })
// const handle = app.getRequestHandler()

// app.prepare()
//     .then(() => {
//         const server = express()

//         //server.use((req, res) => app.getRequestHandler()(req, res))

//         // server.all('*', (req, res) => {
//         //     return handle(req, res)
//         // })

//         server.use(express.urlencoded({
//             extended: false
//         }))

//         server.use(express.json())

//         server.use(cors())

//         server.post("/mail", (req, res) => {
//             const {
//                 email,
//                 text
//             } = req.body
//             console.log('body: ', req.body)

//             sendMail(email, text, (err, data) => {
//                 if (err) {
//                     res.status(500).json({
//                         message: 'Internal Error'
//                     });
//                 } else {
//                     res.json({
//                         message: 'Email sent!!'
//                     })
//                 }
//             })
//         })


//         server.post('*', (req, res) => {
//             return handle(req, res)
//         })

//         server.get('*', (req, res) => {
//             return handle(req, res)
//         })

//         server.listen(PORT, (err) => {
//             if (err) throw err
//             console.log('> Ready on http://localhost:3000')
//         })

//     })
//     .catch((ex) => {
//         console.error(ex.stack)
//         process.exit(1)
//     })