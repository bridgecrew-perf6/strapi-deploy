module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4582887fde4d09417145b1118c4a1c90'),
  },
});
