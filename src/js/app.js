import 'regenerator-runtime/runtime';
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", async () => {
  // This block will be executed once the page is loaded and ready
  const ul = document.querySelector("ul");

  const getData = async (point) => {
    const url = new URL(String(point));
    const promise = await fetch(url, {
      method: "GET",
    });
    return await promise.json();
  };

  const pokemons = await getData('https://pokeapi.co/api/v2/pokemon/?limit=10');
  console.log(pokemons.results);
  pokemons.results.forEach(element => {
    const li = document.createElement('li');
    li.innerText = element.name;
    ul.appendChild(li);
  });

});
