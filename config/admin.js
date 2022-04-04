module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b900514949d79800c3c0bec749fd6be'),
  },
});
