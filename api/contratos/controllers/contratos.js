'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find (ctx) {
    console.log('>> LAYER CONTROLLER');
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.contratos.search(ctx.query);
    } else {
      entities = await strapi.services.contratos.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.contratos }));
  },
};
