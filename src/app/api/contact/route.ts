import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';


const sendEmail = async (data: { name: string; email: string; subject: string; message: string }) => {
  const { name, email, subject, message } = data;

  const transporter: Transporter = nodemailer.createTransport({
    service: process.env.NEXT_EMAIL_SERVICE,
    auth: {
      user: process.env.NEXT_EMAIL_USERNAME,
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_EMAIL_RECIPIENT,
    to: process.env.NEXT_EMAIL_USERNAME,
    subject: `New Message: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      await sendEmail({ name, email, subject, message });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default contactHandler;
