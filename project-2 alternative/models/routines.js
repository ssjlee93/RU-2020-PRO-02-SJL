module.exports = function (sequelize, DataTypes) {
    const Routines = sequelize.define("Routines", {
      routineName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
});
Routines.associate = function(models) {
    Routines.hasMany(models.Exercises, {
      onDelete: "cascade"
    })
    };
    return Routines;
  };