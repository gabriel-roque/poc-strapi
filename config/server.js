module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true
  },
  admin: {
    watchIgnoreFiles: [
      '**/email-sends/*'
    ],
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8508c5a8afc4709b125027d677432566'),
    },
  },
});
