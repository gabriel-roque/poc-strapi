'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate (data) {
      console.log(data);
    },
    afterCreate (result) {
      console.log(result);
    },
  },
};
