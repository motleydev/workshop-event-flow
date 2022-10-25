import nodemailer from "nodemailer";
export default defineComponent({
  async run({ steps, $ }) {
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${"code"}`;

    const config = {
      from: '"Jmart 👻" <jesse@hasura.io>',
      fakeUserMail: "victoria.kozey@ethereal.email",
      fakeUserPass: "UY78gPzCMupYhf4gKS",
    };

    const messages = {
      subject: "Here's your pass!",
      text: `Your QR code is <img src="${qr}"" />`,
      html: `<div>
        <h1>Hello ${config.fakeUserMail}</h1>
            <img src="${qr}"" />
        </div>`,
    };

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: config.fakeUserMail,
        pass: config.fakeUserPass,
      },
    });

    await transporter.sendMail({
      from: config.from,
      to: config.fakeUserMail,
      subject: messages.subject,
      text: messages.text,
      html: messages.html,
    });

    await $.respond({
      status: 200,
      body: { message: "My custom response" },
    });
  },
});
