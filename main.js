// javascript for dark light mode from youtube video

const $HTML = document.documentElement;
const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}
else{
    $HTML.dataset.theme = isDark ? "dark" : "light"
}

let isPressed = false;
const changeTheme = function (){

    isPressed = isPressed ? false : true;
    this.setAttribute("aria-pressed", isPressed);
    $HTML.setAttribute("data-theme",($HTML.dataset.theme === "light") ? "dark" : "light");
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

window.addEventListener("load",function(){
    const $themeBtn = document.querySelector("[data-theme-btn]");
    $themeBtn.addEventListener("click",changeTheme)
})

// idea for fetching API 
// taken from https://medium.com/@tamilnambicse/edamam-recipe-search-api-and-javascript-part-1-3ef8ab582daa

sessionStorage.setItem("app_id", "1f05a08d");
sessionStorage.setItem("app_key", "a614fb15c7618687c8cd2382d7a980a9");
sessionStorage.setItem("endpoint", "https://api.edamam.com/search");

function getRecipeByRecipe() 
{
  const recipe = document.querySelector("#recipe").value;
  const app_id = sessionStorage.getItem("app_id");
  const app_key = sessionStorage.getItem("app_key");
  const endpoint = sessionStorage.getItem("endpoint");
  var recipedetails = "";
  var results = document.querySelector(".recipe-container");
  let label = "";
  let image = "";
  let uri = "";
  let mealType = "";
  let calories = "";

  const loadingElement = document.querySelector("#loading");

  loadingElement.style.display = "block";

  const url = new URL(endpoint);
  url.searchParams.append("q", recipe);
  url.searchParams.append("app_id", app_id);
  url.searchParams.append("app_key", app_key);

  fetch(url).then((response) => 
  {
      if (response.status === 200) 
      {
        loadingElement.style.display = "none";
        return response.json(); 
      } 
      else 
      {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    }).then((data) => 
    {
      data.hits.forEach((recipe) => {
        label = recipe.recipe.label;
        image = recipe.recipe.image;
        uri = recipe.recipe.uri;
        mealType = recipe.recipe.mealType;
        calories = recipe.recipe.calories;
        recipedetails += `
        <div class="cardy">
            <img src="${image}" alt="Card" class="imgy">
            <br>
            <h3>${label}</h3>
            <p>Meal-time: ${mealType}</p>
            <p>Calories: ${calories}</p>
            <p></p>
            <button class="btny" onclick={showRecipe("${uri}")}>View Recipe</button>
        </div>
      `;
      });
      results.innerHTML = recipedetails;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getRecipeByIngredient() {
  const ingredient = document.querySelector("#ingredient").value;
  const app_id = sessionStorage.getItem("app_id");
  const app_key = sessionStorage.getItem("app_key");
  const endpoint = sessionStorage.getItem("endpoint");
  var recipedetails = "";
  var results = document.querySelector(".recipe-container");
  let label = "";
  let image = "";
  let uri = "";
  let mealType = "";
  let calories = "";

  const loadingElement = document.querySelector("#loading");

  loadingElement.style.display = "block";

  const url = new URL(endpoint);
  url.searchParams.append("q", ingredient);
  url.searchParams.append("app_id", app_id);
  url.searchParams.append("app_key", app_key);

  fetch(url).then((response) => {
      if (response.status === 200) {
        loadingElement.style.display = "none";
        return response.json(); 
      } else {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    }).then((data) => {
      data.hits.forEach((recipe) => {
        label = recipe.recipe.label;
        image = recipe.recipe.image;
        uri = recipe.recipe.uri;
        mealType = recipe.recipe.mealType;
        calories = recipe.recipe.calories;
        recipedetails += `
        <div class="cardy">
            <img src="${image}" alt="Card" class="imgy">
            <br>
            <h3>${label}</h3>
            <p>Meal-time: ${mealType}</p>
            <p>Calories: ${calories}</p>
            <p></p>
            <button class="btny" onclick={showRecipe("${uri}")}>View Recipe</button>
        </div>
      `;
      });
      results.innerHTML = recipedetails;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getRecipeByCuisine() {
  const c = document.querySelector("#cuisine").value;
  const app_id = sessionStorage.getItem("app_id");
  const app_key = sessionStorage.getItem("app_key");
  const endpoint = sessionStorage.getItem("endpoint");
  var recipedetails = "";
  var results = document.querySelector(".recipe-container");
  let label = "";
  let image = "";
  let uri = "";
  let mealType = "";
  let calories = "";

  const loadingElement = document.querySelector("#loading");
  loadingElement.style.display = "block";
  const url = new URL(endpoint);

  url.searchParams.append("q", "all");
  url.searchParams.append("cuisineType", c);
  url.searchParams.append("app_id", app_id);
  url.searchParams.append("app_key", app_key);

  fetch(url).then((response) => {
      
      if (response.status === 200) {
        loadingElement.style.display = "none";
        return response.json(); 
      } else {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    }).then((data) => {
      data.hits.forEach((recipe) => {
        label = recipe.recipe.label;
        image = recipe.recipe.image;
        uri = recipe.recipe.uri;
        mealType = recipe.recipe.mealType;
        calories = recipe.recipe.calories;
        recipedetails += `
        <div class="cardy">
            <img src="${image}" alt="Card" class="imgy">
            <br>
            <h3>${label}</h3>
            <p>Meal-time: ${mealType}</p>
            <p>Calories: ${calories}</p>
            <p></p>
            <button class="btny" onclick={showRecipe("${uri}")}>View Recipe</button>
        </div>
      `;
      });
      results.innerHTML = recipedetails;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getRecipeByNutrition(input) {
  
  const app_id = sessionStorage.getItem("app_id");
  const app_key = sessionStorage.getItem("app_key");
  const endpoint = sessionStorage.getItem("endpoint");
  var recipedetails = "";
  var results = document.querySelector(".recipe-container");
  let label = "";
  let image = "";
  let uri = "";
  let mealType = "";
  let calories = "";

  const loadingElement = document.querySelector("#loading");

  loadingElement.style.display = "block";

  const url = new URL(endpoint);
  url.searchParams.append("q", "all");
  url.searchParams.append("health", input);
  url.searchParams.append("app_id", app_id);
  url.searchParams.append("app_key", app_key);

 
  fetch(url).then((response) => {
      if (response.status === 200) {
        loadingElement.style.display = "none";
        return response.json(); 
      } else {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    }).then((data) => {
      
        data.hits.forEach((recipe) => {
        label = recipe.recipe.label;
        image = recipe.recipe.image;
        uri = recipe.recipe.uri;
        mealType = recipe.recipe.mealType;
        calories = recipe.recipe.calories;
        recipedetails += `
        <div class="cardy">
            <img src="${image}" alt="Card" class="imgy">
            <br>
            <h3>${label}</h3>
            <p>Meal-time: ${mealType}</p>
            <p>Calories: ${calories}</p>
            <p></p>
            <button class="btny" onclick={showRecipe("${uri}")}>View Recipe</button>
        </div>
      `;
      });
      results.innerHTML = recipedetails;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getAsian() {
  const app_id = sessionStorage.getItem("app_id");
  const app_key = sessionStorage.getItem("app_key");
  const endpoint = sessionStorage.getItem("endpoint");
  var recipedetails = "";
  var results = document.querySelector(".asian");
  let label = "";
  let image = "";
  let uri = "";
  let mealType = "";
  let calories = "";

  const loadingElement = document.querySelector("#loading");
  loadingElement.style.display = "block";

  const url = new URL(endpoint);
  url.searchParams.append("q", "all");
  url.searchParams.append("cuisineType", "asian");
  url.searchParams.append("app_id", app_id);
  url.searchParams.append("app_key", app_key);

  fetch(url).then((response) => 
  {
      if (response.status === 200) 
      {
        loadingElement.style.display = "none";
        return response.json(); 
      } else 
      {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    }).then((data) => 
    {  
        data.hits.forEach((recipe) => {
        label = recipe.recipe.label;
        image = recipe.recipe.image;
        uri = recipe.recipe.uri;
        mealType = recipe.recipe.mealType;
        calories = recipe.recipe.calories;
        recipedetails += `
        <div class="cardy">
            <img src="${image}" alt="Card" class="imgy">
            <br>
            <h3>${label}</h3>
            <p>Meal-time: ${mealType}</p>
            <p>Calories: ${calories}</p>
            <p></p>
            <button class="btny" onclick={showRecipe("${uri}")}>View Recipe</button>
        </div>
      `;
      });
      results.innerHTML = recipedetails;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getFrench() {
  
  const app_id = sessionStorage.getItem("app_id");
  const app_key = sessionStorage.getItem("app_key");
  const endpoint = sessionStorage.getItem("endpoint");
  var recipedetails = "";
  var results = document.querySelector(".french");
  let label = "";
  let image = "";
  let uri = "";
  let mealType = "";
  let calories = "";

  const loadingElement = document.querySelector("#loading");
  loadingElement.style.display = "block";

  const url = new URL(endpoint);
  url.searchParams.append("q", "all");
  url.searchParams.append("cuisineType", "french");
  url.searchParams.append("app_id", app_id);
  url.searchParams.append("app_key", app_key);


  fetch(url).then((response) => 
  {
      if (response.status === 200) 
      {
        loadingElement.style.display = "none";
        return response.json(); 
      } else 
      {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    }).then((data) => 
    {
        data.hits.forEach((recipe) => {
        label = recipe.recipe.label;
        image = recipe.recipe.image;
        uri = recipe.recipe.uri;
        mealType = recipe.recipe.mealType;
        calories = recipe.recipe.calories;
        recipedetails += `
        <div class="cardy">
            <img src="${image}" alt="Card" class="imgy">
            <br>
            <h3>${label}</h3>
            <p>Meal-time: ${mealType}</p>
            <p>Calories: ${calories}</p>
            <p></p>
            <button class="btny" onclick={showRecipe("${uri}")}>View Recipe</button>
        </div>
      `;
      });
      results.innerHTML = recipedetails;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getChinese() {
  
  const app_id = sessionStorage.getItem("app_id");
  const app_key = sessionStorage.getItem("app_key");
  const endpoint = sessionStorage.getItem("endpoint");
  var recipedetails = "";
  var results = document.querySelector(".chinese");
  let label = "";
  let image = "";
  let uri = "";
  let mealType = "";
  let calories = "";
 
  const loadingElement = document.querySelector("#loading");
  loadingElement.style.display = "block";

  const url = new URL(endpoint);
  url.searchParams.append("q", "all");
  url.searchParams.append("cuisineType", "chinese");
  url.searchParams.append("app_id", app_id);
  url.searchParams.append("app_key", app_key);


  fetch(url).then((response) => 
  {
      if (response.status === 200) 
      {
        loadingElement.style.display = "none";
        return response.json(); 
      } else 
      {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    }).then((data) => 
    {
        data.hits.forEach((recipe) => {
        label = recipe.recipe.label;
        image = recipe.recipe.image;
        uri = recipe.recipe.uri;
        mealType = recipe.recipe.mealType;
        calories = recipe.recipe.calories;
        recipedetails += `
        <div class="cardy">
            <img src="${image}" alt="Card" class="imgy">
            <br>
            <h3>${label}</h3>
            <p>Meal-time: ${mealType}</p>
            <p>Calories: ${calories}</p>
            <p></p>
            <button class="btny" onclick={showRecipe("${uri}")}>View Recipe</button>
        </div>
      `;
      });
      results.innerHTML = recipedetails;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showRecipe(id) {
  sessionStorage.setItem("id", id);
  window.location.href = "recipe.html";
}
