module.exports = {
    HOST: "container_mysql",
    USER: "root",
    PASSWORD: "password",
    DB: "crudnodejs",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
      port: 3309
    }
};