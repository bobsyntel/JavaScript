var arr = [1,2,3,4,6];

function times2(n){
	return n*2;
}

var doubled = arr.map(times2);
console.log(doubled);

var doubled = arr.map(function(n){
	return n*2;
});
console.log(doubled);