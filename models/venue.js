module.exports = function(sequelize, DataTypes) {

  var Venue = sequelize.define("Venue", {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }, // end of name

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }, // end of address

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }, // end of city

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    }, // end of state

    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 10]
      }
    }, // end of zipcode

    field_or_court_number: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }, // end of field_or_court_number

  }, // end of columns

  {
    timestamps: false
  }); // end of Venue table

  // Shoe.associate = function(models) {
  //   Shoe.belongsTo(models.Order, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  Venue.associate = function(models) {
    Venue.hasMany(models.Game, {
      onDelete: "cascade"
    });
  };

  return Venue;
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
