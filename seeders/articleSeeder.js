const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

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

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
