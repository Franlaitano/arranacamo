const { Model, DataTypes } = require("sequelize");

class Author extends Model {
  static initModel(sequelize) {
    Author.init(
      {
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "author",
      },
    );
    return Author;
  }
}

module.exports = Author;
