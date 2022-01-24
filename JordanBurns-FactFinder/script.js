
function FunFact1(){
	document.getElementById('display').innerHTML = "<h1>" + "Dolphins have been trained to be used in wars. These crafty creatures were used by the U.S. and Soviet Union during the Vietnam War and the Cold War." + "<img src='images/dolphin.webp' alt='dolphin' height='200px' width='auto'>" + "</h1>";
}

function FunFact2(){
	document.getElementById('display').innerHTML = "<h1>" + "Water makes different pouring sounds depending on its temperature. If you listen very closely, hot water and cold water sound slightly different when being poured." + "<img src='images/water.jpg' alt='water' height='200px' width='auto'>" + "</h1>";
}

function FunFact3(){
	document.getElementById('display').innerHTML = "<h1>" + "Almost all commercially grown artichokes, 99.9 percent, come from California. One town in particular, Castroville, is nicknamed “the Artichoke Capital of the World.” " + "<img src='images/artichoke.jpg' alt='artichoke' height='200px' width='auto'>" + "</h1>";
}

function FunFact4(){
	document.getElementById('display').innerHTML = "<h1>" + "Broken Kit Kats that are damaged during production get ground up and go between the wafers inside, along with cocoa and sugar." + "<img src='images/kitkat.png' alt='Kit-Kat' height='200px' width='auto'>" + "</h1>";
}

function FunFact5(){
	document.getElementById('display').innerHTML = "<h1>" + "Flamin’ Hot Cheetos were developed by a janitor at Frito-Laywho got the idea after putting chili powder on some reject Cheetos and then pitched it to the CEO. He’s now a successful executive and motivational speaker, and a movie is in the works about his life.<br>" + "<img src='images/cheetos.jpg' alt='cheetos' height='150px' width='auto'>" + "</h1>";
}

function drk(){
	document.querySelector('body').style.backgroundColor = "#335C67";
	document.querySelector('main').style.backgroundColor = "#C8C6D7";
	document.querySelector('section').style.backgroundColor = "#C8C6D7";
	document.querySelector('section').style.border = "3px solid #B26E63";
	document.querySelector('section').style.color = "#335C67";
	var bttns = document.getElementsByTagName('input');
	for(var i = 0; i < bttns.length; i++){
	bttns[i].style.backgroundColor = "#B26E63";
	bttns[i].style.color = "#540B0E";
	}
	
}

function lght(){
	document.querySelector('body').style.backgroundColor = "#8EEDF7";
	document.querySelector('main').style.backgroundColor = "#EA526F";
	document.querySelector('section').style.backgroundColor = "#058ED9";
	document.querySelector('section').style.border = "3px solid #E4C1F9";
	document.querySelector('section').style.color = "#8EEDF7";
	var bttns = document.getElementsByTagName('input');
	for(var i = 0; i < bttns.length; i++){
	bttns[i].style.backgroundColor = "#8EEDF7";
	bttns[i].style.color = "#058ED9";
	}
}

function stpd(){
	document.querySelector('body').style.backgroundColor = "#8CB369";
	document.querySelector('main').style.backgroundColor = "#F4A259";
	document.querySelector('section').style.backgroundColor = "#666B6A";
	document.querySelector('section').style.border = "3px solid #8CB369";
	document.querySelector('section').style.color = "#BC4B51";
	var bttns = document.getElementsByTagName('input');
	for(var i = 0; i < bttns.length; i++){
	bttns[i].style.backgroundColor = "#8CB369";
	bttns[i].style.color = "#000000";
	}
}