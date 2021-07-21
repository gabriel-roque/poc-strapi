const { send } = require('../controllers/email')

module.exports = {
  definition: `
    type Email {
      status: String
    }
  `,
  query: `
    sendEmail: Email!
  `,
  resolver: {
    Query: {
      sendEmail: {
        description: 'Return status send email',
        resolverOf: 'application::email.email.send', // Que possuir permissão irá poder invocar esta query / mutation
        resolver: async (obj, options, ctx) => {
          send()
          return {
            status: 'Send email mock!'
          }
        },
      }
    },
  },
};
