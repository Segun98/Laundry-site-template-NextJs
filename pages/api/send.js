const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.set-Api--Key('')

  const { email, text } = req.body

  const content = {
    to: 'shegunolanitori@gmail.com',
    from: email,
    subject: 'Customer Order From Website',
    text: text,
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }

}
