const now = new Date();

module.exports = (collection) => {
  return collection
    .getFilteredByGlob("./src/content/speakers/*.md")
    .sort((a, b) => b.data.surname - a.data.surname);
};
