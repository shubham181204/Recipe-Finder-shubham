const recipes = [
  {
    name: "Spaghetti Bolognese",
    image: "Spaghetti Bolognese.jpg",
    ingredients: ["spaghetti", "beef", "tomato"]
  },
  {
    name: "Vegetable Stir Fry",
    image: "Vegetable Stir Fry.jpg",
    ingredients: ["broccoli", "carrot", "soy sauce"]
  },
  {
    name: "Chicken Curry",
    image: "chicken-curry-recipe.jpg",
    ingredients: ["chicken", "curry powder", "onion"]
  },
  {
    name: "Pancakes",
    image: "Pancakes.jpg",
    ingredients: ["flour", "milk", "egg"]
  }
];

document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (!query) {
    results.innerHTML = "<p>Please enter ingredients to search.</p>";
    return;
  }

  const inputIngredients = query.split(",").map(i => i.trim());

  const filtered = recipes.filter(recipe =>
    inputIngredients.some(ing =>
      recipe.ingredients.some(rIng => rIng.toLowerCase().includes(ing))
    )
  );

  if (filtered.length === 0) {
    results.innerHTML = "<p>No matching recipes found.</p>";
    return;
  }

  filtered.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" style="width:200px; height:200px; object-fit:cover; border-radius:8px;" />
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
    `;
    results.appendChild(card);
  });
});