const uri = sessionStorage.getItem("id");
const app_id = sessionStorage.getItem("app_id");
const app_key = sessionStorage.getItem("app_key");
const endpoint = sessionStorage.getItem('endpoint');
var health = '';

const loading = document.querySelector("#loading");

loading.style.display = "block";

// idea for fetching API 
// taken from https://medium.com/@tamilnambicse/edamam-recipe-search-api-and-javascript-part-1-3ef8ab582daa

const url = new URL(endpoint);
url.searchParams.append("r", uri);
url.searchParams.append("app_id", app_id);
url.searchParams.append("app_key", app_key);

fetch(url).then((response) => 
{
  if (response.status === 200) 
  {
    loading.style.display = "none";
    return response.json(); 
  } 
  else 
  {
    throw new Error(`Request failed with status code ${response.status}`);
  }
}).then((data) => {
  
  document.getElementById('recipeName').innerHTML = data[0].label;
  document.getElementById('recipeImage').src = data[0].image;

  data[0].healthLabels.forEach( item =>
    {
        health += `
        <button type="button" style="background-color: rgb(255, 132, 0);border:1px solid black; color:white;font-size:15px" class="btn m-2">${item}</button>
        `;
  });
  document.querySelector('#healthLabels').innerHTML = health;

  const ulParent = document.getElementById('ingredients');
  const ul = document.createElement("ul");
  ul.className = "list-group";
  ulParent.appendChild(ul);
  
  data[0].ingredientLines.forEach( item => {
    const li = document.createElement('li');
    li.className = "list-group-item";
    li.style.fontSize = "15px";
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById('instructions').src = data[0].url;

})
.catch((error) => {
  console.error("Error:", error);
});
