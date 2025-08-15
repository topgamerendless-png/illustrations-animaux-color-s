const animals = [
    `<svg class='animal' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'><circle cx='75' cy='75' r='50' fill='orange' /></svg>`,
    `<svg class='animal' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'><rect width='100' height='100' fill='blue' /></svg>`,
    `<svg class='animal' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'><ellipse cx='75' cy='75' rx='60' ry='30' fill='green' /></svg>` 
];

document.getElementById('generate-btn').addEventListener('click', () => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById('animal-illustration').innerHTML = randomAnimal;
});
