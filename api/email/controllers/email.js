const _ = require('lodash')
const fs = require('fs')

const user = {
  email: 'gmiranda@jazida.com',
  username: 'gabrielrms',
  firstname: 'Gabriel',
  lastname: 'Miranda',
  itens: ['Item 1', 'Item 2', 'Item 3']
}

module.exports = {
  async send () {
    const templateFile = fs.readFileSync('email/template.html')
    const compiler = _.template(templateFile);
    const HTML_RENDERED = compiler({ user })
    fs.writeFile(`email-sends/${user.email}-${new Date()}.html`, HTML_RENDERED, () => { })

    const emailTemplate = {
      subject: 'Welcome <%= user.firstname %>',
      text: `Welcome on mywebsite.fr!
        Your account is now linked with: <%= user.email %>.`,
      html: HTML_RENDERED,
    };

    // await strapi.plugins.email.services.email.sendTemplatedEmail(
    //   {
    //     to: user.email,
    //   },
    //   emailTemplate,
    //   {
    //     user: _.pick(user, ['username', 'email', 'firstname', 'lastname']),
    //   }
    // )

    return {
      message: 'Email Send!'
    }
  }
}
