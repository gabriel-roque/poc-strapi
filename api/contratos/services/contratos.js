'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  find (params, populate) {
    console.log('>> LAYER SERVICE');
    return strapi.query('contratos').find(params, populate);
  },
};
