const reviews = [
  {
    text: "Au moins maintenant, on est certains d'avoir une bonne sélection de bières belges.",
    author: "Jérôme Coupé",
  },
  {
    text: "Depuis qu'ils ont gagné les olympiades, ils organisent des soirées rien que pour eux.",
    author: "Anonyme",
  },
  {
    text: "Heureusement que les anciennes et les anciens sont sympas ... déjà qu'on voit les profs le samedi cette année ...",
    author: "Une MM3B",
  },
  {
    text: "Ah moi, si Manon vient causer, je m'installe au premier rang avec mon petit drapeau!",
    author: "Caroline Voglaire",
  },
  {
    text: "Pour une fois, je fais la route depuis St Hubert pour écouter plutôt que pour parler. Tof!",
    author: "Sylvia Minnaerts",
  },
  {
    text: "M'enfin, c'est malin ça. En plein milieu de mon congé de paternité. merci les MM ...",
    author: "Christophe Pesesse",
  },
  {
    text: "C'est pas si mal ce qu'ils font avec Blender, finalement.",
    author: "Salvatore Bordonaro",
  },
  {
    text: "Je dois dire que voir ce qu'ils sont devenus me rassure un peu sur le bien fondé des investissements informatiques consentis.",
    author: "Etienne Baffrey",
  },
  {
    text: "En tous cas ces multimédia ce sont des durs à cuire.",
    author: "La chauffagiste d'Athéna",
  },
  {
    text: "C'est le genre de soirée pendant laquelle les VFX se produisent spontanément.",
    author: "Damien Welsh",
  },
  {
    text: "Comme quoi, jouer du piano avec des bananes au cours, cela peut effectivement mener loin.",
    author: "Julien Moreau",
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

module.exports = shuffleArray(reviews);
