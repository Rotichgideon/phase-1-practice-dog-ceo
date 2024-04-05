//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then((Response) => Response.json())
    .then((images) => {
        const imagecont = document.getElementById("dog-image-container");
        images.message.forEach((dog) => {
            const imageEl = document.createElement("img");
            imageEl.src = dog;
            imageCont.appendChild(imageEl);
        });
    });

    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((breeds) => {
      const dogBreeds = document.getElementById("dog-breeds");
      const breedsObj = breeds.message;
      Object.keys(breedsObj).forEach((breed) => {
        const breedList = document.createElement("li");
        breedList.textContent = breed;
        dogBreeds.appendChild(breedList);
        breedList.addEventListener("click", () => {
          breedList.style.color = "green";
        });
        const breedDropdown = document.getElementById("breed-dropdown");
        breedDropdown.addEventListener("change", (e) => {
          const selectedValue = e.target.value;
          breedList.innerHTML = "";
          Object.keys(breedsObj).forEach((breed) => {
            if (breed.startsWith(selectedValue)) {
              const breedLetterSpecificList = document.createElement("li");
              breedLetterSpecificList.textContent = breed;
              breedList.appendChild(breedLetterSpecificList);
              breedList.addEventListener("click", () => {
                breedList.style.color = "green";
              });
            }
          });
        });
      });
    });
});
