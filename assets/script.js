// Bandeau du haut : une phrase choisie au hasard à chaque chargement de page.
const sloganBandeau = [
  "À la fin, nous sommes tous de semblables nationalistes.",
  "Ouvriers de toutes les communautés, rejoignez-nous dans la lutte contre les abus.",
  "Le parti de l'avenir qui décrira l'avenir de notre pays comme l'ère la plus glorieuse.",
  "Une nation tellement patriote et nationaliste que les ennemis mourront tous par sélection naturelle."
];

document.addEventListener('DOMContentLoaded', function () {
  const cible = document.getElementById('bandeau-texte');
  if (cible) {
    const choix = sloganBandeau[Math.floor(Math.random() * sloganBandeau.length)];
    cible.textContent = choix;
  }
});
