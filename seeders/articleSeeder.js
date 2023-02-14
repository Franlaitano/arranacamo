const { faker } = require("@faker-js/faker");
const { Article, Users } = require("../models");

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

  for (let i = 0; i < 8; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.lorem.paragraphs(1),
      username: faker.lorem.word(),
      password: username,
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");

  await Users.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
