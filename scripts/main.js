console.log("hello beautiful");
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';
import {BuildersBio} from "./bio/BuildersBio.js"

	const navElement = document.querySelector("nav");

	navElement.addEventListener("click", (event) => {
		if (event.target.id === "showRed") {
			filterLegos("Red")
		} else if (event.target.id === "showAll") {
			makeLegoList(useLegos());
		} else if (event.target.id === "showGreen"){
			filterLegos("Green")
		}
	})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

document
.querySelector('#lego-dropdown')
.addEventListener('change', (event) => {
	if (event.target.value === "Solid") {
		filterLegosByMaterial("Solid")
	} 
	else if (event.target.value === "Milky") {
		filterLegosByMaterial("Milky");
	} 
	else if (event.target.value === "Chrome"){
		filterLegosByMaterial("Chrome")
	} 
	else if (event.target.value === "Pearl"){
		filterLegosByMaterial("Pearl")
	} 
	else if (event.target.value === "Transparent"){
		filterLegosByMaterial("Transparent")
	} 
	else if (event.target.value === "Modulex"){
		filterLegosByMaterial("Modulex")
	} 
	else if (event.target.value === "Ink"){
		filterLegosByMaterial("Ink")
	} 
	else if (event.target.value === "Glitter"){
		filterLegosByMaterial("Glitter")
	} 
	else{
		makeLegoList(useLegos)
	}
})

const filterLegosByMaterial = (event) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(event)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

//EIA - Everything Is Awesome
const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	});
	const asideElement = document.querySelector("aside");
	asideElement.innerHTML += BuildersBio();
}

startEIA();