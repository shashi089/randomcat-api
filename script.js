const get_cat = document.querySelector("#btn");
const cat_image = document.querySelector(".cat_images");

get_cat.addEventListener("click", getRandomCat);

async function getRandomCat() {
  let response = await fetch("https://aws.random.cat/meow");
  let data = await response.json();
  cat_image.innerHTML = `<img src="${data.file}">`;
}
