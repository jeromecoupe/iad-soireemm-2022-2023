const sponsors = [
  {
    name: "Mon super Sponsor",
    logo: "placeholder.jpg",
  },
  {
    name: "Sponsor",
    logo: "placeholder.jpg",
  },
];

const orderedSponsors = sponsors.sort((a, b) =>
  a.name.localeCompare(b.name, "fr")
);

module.exports = orderedSponsors;
