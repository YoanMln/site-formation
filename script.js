const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".elementContainer");

    const nameElement = document.createElement("h1");
    nameElement.textContent = `Nom : ${data.name}`;

    const imageElement = document.createElement("img");
    imageElement.src = data.sprites.front_default;
    imageElement.alt = data.name;

    const typeElement = document.createElement("h3");
    typeElement.textContent = `Type : ${data.types[0].type.name}`;

    container.appendChild(nameElement);
    container.appendChild(imageElement);
    container.appendChild(typeElement);
  })
  .catch((error) => {
    console.error("Erreur :", error);
  });
