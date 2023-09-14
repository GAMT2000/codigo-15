//vamos a cambiar el color del body

//paso1 como podemos obtener un elemento desde JS

//Antigua
const cuerpoDeLaWeb = document.getElementsByTagName("body");
console.log("getElementsByTagName", cuerpoDeLaWeb[0]);

//Moderna
const body = document.querySelector("body");

// cuerpoDeLaWeb2.style.backgroundColor = "#eee"
// cuerpoDeLaWeb2.style.fontSize = "20px"
body.style.cssText = `
        background-color: #eee;
        font-size: 20px;
    `;

const secondaryTitles = document.getElementsByTagName("h2");

for (const item of secondaryTitles) {
  console.log(item);
}

console.log("----------");

const secondaryTitles2 = document.querySelectorAll("h2");

secondaryTitles2.forEach((item) => {
  console.log(item);
});

//obtener elemento por ID
//antigua
const title = document.getElementById("title");
//moderna
const title2 = document.querySelector("#title");

//obtener elemento por class
//antigua
const imageAvengers = document.getElementsByClassName("img-avengers");
console.log(imageAvengers);
//moderna
const imageAvengers2 = document.querySelector(".img-avengers");
console.log(imageAvengers2);

const btnChangeWeb = document.querySelector("#btn-change-web");

btnChangeWeb.onclick = function () {
  imageAvengers2.src =
    "https://cdn.vox-cdn.com/thumbor/q1VhYtuVNtHtWRCb2icgjPzX3Sw=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg";

    imageAvengers2.style.cssText = `
    width:200px`

    title2.textContent = "Avengers End Game"
};
