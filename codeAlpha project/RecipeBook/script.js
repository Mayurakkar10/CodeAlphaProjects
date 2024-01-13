// JavaScript for adding recipes dynamically
const recipeForm = document.getElementById('recipeForm');
const recipesSection = document.getElementById('recipes');

recipeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    addRecipeCard(recipeName, ingredients, instructions);
    recipeForm.reset();
});

function addRecipeCard(name, ingredients, instructions) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Ingredients:</strong><br>${ingredients}</p>
        <p><strong>Instructions:</strong><br>${instructions}</p>
    `;
    recipesSection.appendChild(recipeCard);
}
