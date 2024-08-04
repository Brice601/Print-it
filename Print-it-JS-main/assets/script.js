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
/* arrows */
let baliseBanner = document.getElementById("banner");
console.log(baliseBanner);

let leftArrowSrc = "./assets/images/arrow_left.png";
let rightArrowSrc = "./assets/images/arrow_right.png";

let newLeftArrow = document.createElement("img");
let newRightArrow = document.createElement("img");

newLeftArrow.className += "arrow arrow_left";
newRightArrow.className += "arrow arrow_right";
newLeftArrow.src = leftArrowSrc;
newRightArrow.src = rightArrowSrc;
newLeftArrow.setAttribute("alt", "image flèche gauche");
newRightArrow.setAttribute("alt", "image flèche droite")
console.log(newLeftArrow);
console.log(newRightArrow);

baliseBanner.appendChild(newLeftArrow);
baliseBanner.appendChild(newRightArrow);

newLeftArrow.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche de gauche")
})

newRightArrow.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche de droite")
})

/* dots */
let baliseDots = document.querySelector(".dots");
console.log(baliseDots)

for (let i = 0; i < slides.length; i++) {
	let newDot = document.createElement("span");
	newDot.className += "dot";
	baliseDots.appendChild(newDot);
}

let allDots = baliseDots.querySelectorAll(".dot");
allDots[0].classList.add("dot_selected");
console.log(allDots);



