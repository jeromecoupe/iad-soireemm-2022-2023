const sponsors = [
  {
    name: "Institut des Arts de Diffusion",
    logo: "iad_logo.png",
    url: "https://www.iad-arts.be",
  },
  {
    name: "Sowalfin",
    logo: "sowalfin_logo.png",
    url: "https://www.sowalfin.be",
  },
  {
    name: "Générations entreprenantes",
    logo: "generations_entreprenantes_logo.png",
    url: "https://www.sowalfin.be/GE/",
  },
  {
    name: "Le CLub",
    logo: "le_club_logo.png",
    url: "https://www.iad-arts.be",
  },
];

const orderedSponsors = sponsors.sort((a, b) =>
  a.name.localeCompare(b.name, "fr")
);

module.exports = orderedSponsors;
