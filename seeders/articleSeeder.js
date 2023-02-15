const { faker } = require("@faker-js/faker");
const { Article, User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 8; i++) {
    articles.push({
      title: faker.lorem.sentence(4),
      content: faker.lorem.paragraphs(1),
      author: faker.name.findName(),
    });
  }

  const users = [];
  const pass = await bcrypt.hash("1234", 8);

  for (let i = 0; i < 8; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.lorem.word(),
      email: faker.internet.email(),
      password: pass,
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
