module.exports = function (sequelize, DataTypes) {
  const Exercises = sequelize.define("Exercises", {
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
  });
  Exercises.associate = function (models) {
    Exercises.belongsTo(models.Routines, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Exercises;
};
