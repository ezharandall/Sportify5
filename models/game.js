const Venue = require("./venue.js")

module.exports = function(sequelize, DataTypes) {

  var Game = sequelize.define("Game", {

    date_time_of_game: {
      type: DataTypes.DATE, // I had trouble getting type: Sequelize.DATE to work.
      allowNull: false,
      defaultValue: new Date()
    }, // end of date_time_of_game

    final_score_our_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    }, // end of final_score_our_team

    final_score_their_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    }, // end of final_score_their_team

  }, // end of columns

    {
      timestamps: false
    }); // end of Game table

  //
  // Client.associate = function(models) {
  //   Client.hasMany(models.Order, {
  //     onDelete: "cascade"
  //   });
  // };

  Game.associate = function(models) {

    Game.belongsTo(models.Venue, {
      foreignKey: {
        allowNull: false
      }
    }); // end of belongsTo

    // Order.belongsTo(models.Shoe, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });

  } // end of associate

  return Game;
};
