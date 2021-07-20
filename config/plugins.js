module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'JServiços <sistema@jazida.com>',
      defaultReplyTo: 'contato@jazida.com',
      testAddress: 'gmiranda@jazida.com',
    },
  },
});
