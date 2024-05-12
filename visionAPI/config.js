const ENV = "development";

const config = {
  development: {
    db: {
      host: "localhost",
      user: "Kfalcone",
      password: "Wellness925!",
      database: "visionglassdb",
    },
    port: 3000,
  },
  production: {
    db: {
      host: "production_host",
      user: "production_username",
      password: "production_password",
      database: "production_database",
    },
    port: process.env.PORT || 3000,
  },
};

module.exports = config[ENV];
