module.exports = {
  query: `
    obterRestaurants: Int
  `,
  resolver: {
    Query: {
      obterRestaurants: {
        description: 'Return the count of restaurants',
        resolverOf: 'application::restaurant.restaurant.find',
        resolver: async (obj, options, ctx) => {
          console.log(obj, options, ctx);
          return await strapi.api.restaurant.services.restaurant.count(options.where || {});
        },
      },
    },
  },
};
