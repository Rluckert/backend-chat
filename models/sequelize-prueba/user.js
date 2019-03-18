module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nick: DataTypes.STRING,
        content: {
            type: DataTypes.TEXT,
            allowNull: false
          },
      },
      {
        freezeTableName: true,
      }
    );
  
    Author.associate = (models) => {
      Author.hasMany(models.message);
    };
  
    return User;
  }