module.exports = {
  async changeRole (ctx) {
    const { userId, roleId } = ctx.request.body
    await strapi.query('user', 'users-permissions').update({ id: userId }, { role: roleId })

    return {
      message: 'Role is Updated!'
    }
  }
}
