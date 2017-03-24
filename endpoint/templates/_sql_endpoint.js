
"use strict";

module.exports = function(sequelize, DataTypes) {
  var <%= endpointName %> =sequelize.define('<%= endpointName %>', {
    field1:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    field2: {
      type: DataTypes.STRING,
      field: 'field_2' // Will result in an attribute that is firstName when user facing but first_name in the database
    }
  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
    instanceMethods: {

      },
      classMethods:{
        associate: function(models){
          //models.<%= endpointName %>.hasMany(models.OtherModel);
        }
      }

  });
  return <%= endpointName %>;
};
