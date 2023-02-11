/**
 * Colocar aquí JS "propio".
 * Notar que este código se ejecutará en el navegador.
 */
const { Article } = require("../models");
const articles = await Article.findAll();

for (const article of articles) {
  const editButton = document.getElementById(`editButton${article.id}`);
  editButton.addEventListener("click", () => {
    alert(`La concha de tu madre All Boys y artículo ${article.id}`);
  });
}
