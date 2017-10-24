const Player = require("./player.js")

module.exports = function(sequelize, DataTypes) {

  var Fee = sequelize.define("Fee", {

    monthly_fee: DataTypes.INTEGER, // I had trouble getting DECIMAL to work.

    paid: {
      type: DataTypes.BOOLEAN, // I had trouble getting type: Sequelize.DATE to work.
      allowNull: false,
      defaultValue: false
    }, // end of paid

   }, // end of columns

   {
     timestamps: false
   }); // end of Fee table

  Fee.associate = function(models) {

    Fee.belongsTo(models.Player, {
      foreignKey: {
        allowNull: false
      }
    }); // end of belongsTo

  } // end of associate

  return Fee;
};
