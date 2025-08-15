const animals = [
    `<svg class='animal' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'><circle cx='75' cy='75' r='50' fill='orange' /></svg>`,
    `<svg class='animal' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'><rect width='100' height='100' fill='blue' /></svg>`,
    `<svg class='animal' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'><ellipse cx='75' cy='75' rx='60' ry='30' fill='green' /></svg>` 
];

// Gère l'événement de clic du bouton pour générer un animal aléatoire
// Lorsqu'on clique sur le bouton, un animal aléatoire est choisi dans le tableau et affiché
// Utilisation de Math.random() pour sélectionner un élément du tableau 'animals' de manière aléatoire
// L'illustration de l'animal est ensuite mise à jour dans l'élément HTML avec l'id 'animal-illustration'
document.getElementById('generate-btn').addEventListener('click', () => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    // Met à jour l'illustration de l'animal dans l'élément HTML
    document.getElementById('animal-illustration').innerHTML = randomAnimal;
});