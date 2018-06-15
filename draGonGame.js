// const dragon = document.getElementId('dragon');
// console.dir(document)
// console.log('dragon')
function rollDice(){
	let rand1 = Math.ceil(Math.random() * 6);
	let rand2 = Math.ceil(Math.random() * 6);

	let dice = document.getElementById('dice');
	dice.children[0].src = `./dragon-assets/d${rand1}.gif`
	dice.children[1].src = `./dragon-assets/d${rand2}.gif`
	console.dir(dice)

// 	if(rand1 + rand2 > 8){
// 		 document.getElementById('dragon').children[0].src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fsimpsons%2Fimages%2Fe%2Fed%2FLisa-Simpson-icon-1.png%2Frevision%2Flatest%3Fcb%3D20170628205647&imgrefurl=http%3A%2F%2Fsimpsons.wikia.com%2Fwiki%2FFile%3ALisa-Simpson-icon-1.png&docid=zYho8gwOCkaiMM&tbnid=OekuJlxLPzp1vM%3A&vet=10ahUKEwjzhuny5OzaAhXO21MKHSDSDzkQMwirASgBMAE..i&w=256&h=256&bih=613&biw=1366&q=lisa%20simpson&ved=0ahUKEwjzhuny5OzaAhXO21MKHSDSDzkQMwirASgBMAE&iact=mrc&uact=8"
// 	}
}
// let dragon = document.querySelector('dragon')
let dragon = document.getElementById('dragon');
console.dir(dragon)
dragon.innerHTML = '<h1>JavaScript was here!</h1>'