// const nodemailer = require('nodemailer')
// const mailGun = require('nodemailer-mailgun-transport')


// const auth = {
//     auth: {
//         api_key: '61953e07c4db729bb1e0086e10277bf3-0a4b0c40-fce5e212',
//         domain: 'sandbox660c970352e04ded8ac890b81f3bd87e.mailgun.org'
//     }
// }

// const transporter = nodemailer.createTransport(mailGun(auth))


// const sendMail = (email, text, cb) => {

//    const mailOptions = {
//         from: email,
//         to: "shegunolanitori@gmail.com",
//         subject: "Customer Order",
//         text

//     };

//     transporter.sendMail(mailOptions, (err, data) => {
//         if (err) {
//             cb(err, null);
//         } else {
//             cb(null, data)
//         }
//     })
// }

// module.exports = sendMail;