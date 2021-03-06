require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: process.env.STORAGE,
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
  mongo: {
    path: process.env.DB_PATH,
    options: {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    },
  },
};
