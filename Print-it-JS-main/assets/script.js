const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let baliseBanner = document.getElementById("banner");
console.log(baliseBanner);

let leftArrowSrc = "./assets/images/arrow_left.png";
let rightArrowSrc = "./assets/images/arrow_right.png";

let newLeftArrow = document.createElement("img");
let nexRightArrow = document.createElement("img");

newLeftArrow.className += "arrow arrow_left";
nexRightArrow.className += "arrow arrow_right";
newLeftArrow.src = leftArrowSrc;
nexRightArrow.src = rightArrowSrc;
newLeftArrow.setAttribute("alt", "image flèche gauche");
nexRightArrow.setAttribute("alt", "image flèche droite")
console.log(newLeftArrow);
console.log(nexRightArrow);

baliseBanner.appendChild(newLeftArrow);
baliseBanner.appendChild(nexRightArrow);


