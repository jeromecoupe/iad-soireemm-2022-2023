const now = new Date();

module.exports = (collection) => {
  return collection
    .getFilteredByGlob("./src/content/speakers/*.md")
    .sort((a, b) => a.data.surname.localeCompare(b.data.surname, "fr"));
};
