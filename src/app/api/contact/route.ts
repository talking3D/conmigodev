// const nodemailer = require('nodemailer');
const nodemailer = require('nodemailer');
import { NextResponse, NextRequest } from 'next/server';

const messageHtml = (name: string, email: string, message: string) => {
    return `<h3>You have a mesasge from your site</h3>
    <p>
      <span style='font-weight: bold;'>Name: </span>
      <span style='font-family:monospace;'>${name}</span>
    </p>
    <p>
      <span style='font-weight: bold;'>Email: </span>
      <span style='font-family: monospace;'>${email}</span>
    </p>
    <p>
      <span style='font-weight: bold;'>Message: </span>
      <span style='font-family: monospace;'>${message}</span>
    </p>`;
};
export const POST = async (request: NextRequest) => {
    const { name, email, message } = await request.json();
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
        },
    });
    const info = async () =>
        await transporter.sendMail({
            from: `${email}`,
            to: process.env.MAIL_USERNAME,
            subject: `Message from ${name} by [conmigo.dev]`,
            html: messageHtml(name, email, message),
        });

    const response = await info()
        .then(() =>
            NextResponse.json({
                success: 'Your message has been sent!',
                status: 200,
            })
        )
        .catch(() =>
            NextResponse.json({
                error: 'Ups, something went wrong',
                status: 500,
            })
        );
    return response;
};
