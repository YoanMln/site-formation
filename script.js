const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;

function loadNextPoke() {
  const random = Math.floor(Math.random() * 1118) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${random}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(`.elementContainer`);
      container.innerHTML = "";
      const nameElement = document.createElement(`h1`);
      nameElement.textContent = `Nom : ${data.name}`;

      const typeElement = document.createElement("h3");
      typeElement.textContent = `Type : ${data.types[0].type.name}`;

      const imageElement = document.createElement(`img`);
      imageElement.src = data.sprites.front_default;
      imageElement.alt = data.name;

      container.appendChild(nameElement);
      container.appendChild(typeElement);
      container.appendChild(imageElement);
    })
    .catch((error) => {
      console.error(`Erreur :`, error);
    });
}

loadNextPoke();
nextBtn.addEventListener(`click`, loadNextPoke);

//-----Météo-----//

function getWeather() {
  const location = document.getElementById("location").value;
  const apiKey = "35b98ed6f0e852ba49933ec13c51d26e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { temp, feels_like } = data.main;
      const description = data.weather[0].description;
      const cityName = data.name;
      const country = data.sys.country;

      const weatherDisplay = `Current weather in ${cityName}, ${country}: ${description}, ${temp}°C (feels like ${feels_like}°C)`;

      document.getElementById("weather").textContent = weatherDisplay;
    })
    .catch((error) => {
      console.error(`Erreur :`, error);
    });
}

//-----DropDownMenu-----//

const button = document.getElementById("dropDownMenuButton");
const menu = document.getElementById(`dropDownMenu`);

button.addEventListener(`click`, () => {
  menu.classList.toggle(`show`);
});
