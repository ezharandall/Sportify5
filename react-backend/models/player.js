module.exports = function(sequelize, DataTypes) {

  var Player = sequelize.define("Player", {

    name:{
       type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 60]
        }
    }, // end of name

    age: {
      type: DataTypes.INTEGER, // I had trouble getting DECIMAL to work.
      allowNull: false,
      validate: {
        len: [1, 2]
      }
    }, // end of age

    position: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 25]
    }, // end of position

    jersey_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // default: 0
    }, // jersey_number

  }, // end of columns

  {
    timestamps: false
  }); // end of Player table

  // Shoe.associate = function(models) {
  //   Shoe.belongsTo(models.Order, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  return Player;
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
