module.exports = ({ env }) => ({

    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtpout.secureserver.net'),
          port: env('SMTP_PORT', 465),
          secure: true,
          auth: {
            user: env('info@sucify.com'),
            pass: env('Thakur@123'),
          },
        },
        settings: {
          defaultFrom: 'info@sucify.com',
          defaultReplyTo: 'info@sucify.com',
        },
      },
    },
  });