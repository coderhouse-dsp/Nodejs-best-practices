require("dotenv/config");
const Sequelize = require("sequelize");
const { DataTypes: DT } = Sequelize;

const db = new Sequelize("best_practices", "postgres", "DB@pass123", {
  dialect: "postgres",
  host: "localhost",
});

const User = db.define("user", {
  username: {
    type: DT.STRING(30),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DT.STRING,
    allowNull: true,
  },
});

const Article = db.define("article", {
  title: {
    type: DT.STRING(150),
    allowNull: true,
  },
  content: {
    type: DT.STRING,
  },
});

const Comment = db.define("comment", {
  title: {
    type: DT.STRING(150),
    allowNull: true,
  },
  message: {
    type: DT.STRING,
  },
});

Article.belongsTo(User, { as: "author" });
User.hasMany(Article);

Comment.belongsTo(Article);
Article.hasMany(Comment);

Comment.belongsTo(User);
User.hasMany(Comment);

module.exports = { db ,User,Comment,Article};
