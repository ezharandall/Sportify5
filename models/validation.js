module.exports = function(sequelize, DataTypes) {

  var Validation = sequelize.define("Validation", {

  email:{
     type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
  }, // end of email

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    }, // end of password

    last_logon: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }, // end of last_logon

  }, // end of columns

  {
    timestamps: false
  }); // end of Validation table

  // Shoe.associate = function(models) {
  //   Shoe.belongsTo(models.Order, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  return Validation;
};



// var order = {
//   date: '',
//   shoesInOrder: [
//     quantity: 5,
//     item: {
//       price: 5,

//     }
//   ]
// }
