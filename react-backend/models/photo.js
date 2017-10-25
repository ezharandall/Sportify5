module.exports = function(sequelize, DataTypes) {

  var Photo = sequelize.define("Photo", {

    image: {
          type: DataTypes.BLOB,
          allowNull: false,
        //  len: [1]
      }, // end of image

    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 60]
      }
    }, // end of description

  }, // end of columns

  {
    timestamps: false
  }); // end of Photo table

  // Shoe.associate = function(models) {
  //   Shoe.belongsTo(models.Order, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  return Photo;
};
