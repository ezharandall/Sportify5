module.exports = function(sequelize, DataTypes) {

  var Announcement = sequelize.define("Announcement", {

  text:{
     type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
  }, // end of text

  display_start_date: {
        type: DataTypes.DATE, // I had trouble getting type: Sequelize.DATE to work.
        allowNull: false,
        defaultValue: new Date()
      }, // end of display_start_date

  display_end_date: {
        type: DataTypes.DATE, // I had trouble getting type: Sequelize.DATE to work.
        allowNull: false,
        defaultValue: new Date()
      }, // end of display_end_date

  }, // end of columns

  {
    timestamps: false
  }); // end of Announcement table

  // Shoe.associate = function(models) {
  //   Shoe.belongsTo(models.Order, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  return Announcement;
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
