import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

var sql = new Sequelize('postgres://postgres@postgres:5432/dev');
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "relations");
  })
  .forEach(function(file) {
    var model = sql.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


module.exports = db;
