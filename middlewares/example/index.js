module.exports = strapi => {
  return {
    // can also be async
    initialize () {
      strapi.app.use(async (ctx, next) => {
        // await someAsyncCode()

        console.log('>> PASS for Middleware');

        await next();

        // await someAsyncCode()
      });
    },
  };
};
