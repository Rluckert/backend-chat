module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        user_from: DataTypes.INTEGER,
        content: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        user_to: DataTypes.INTEGER,
        content: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        url_image: DataTypes.STRING,
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        message: DataTypes.STRING,
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
      },
      {
        freezeTableName: true,
      }
    );
  
    Messages.associate = (models) => {
      Post.belongsTo(models.user);
    };
  
    return Message;
  }