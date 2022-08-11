module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb98ae1b6673473af7e45eb58ebea318'),
  },
});
