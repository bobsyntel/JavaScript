
// 1)
// for(let i = 0; i < 7 ; i++){
// 	if(i=== 5 || i === 6 ){
// 		console.log("sleep in");
// 	}else{
// 		console.log("Go to work");
// 	}
// }

// 2)

function numOfDaysInMonth(year ,month){
		if(year% 4 == 0 && month === 2){
			console.log("this month has 29 days");
		}else if(month === 2){
			console.log("this month has 28 days");
		}else{
			detNumOfDays(month);
		}

}

function detNumOfDays(month){
	
		if(month === 9 || month === 4 || month === 6 || month === 11){
			console.log("This month "+ month+ " has 30 days");
			
		}else{
			console.log("This month "+"has 31 days");
			
		}
	
}

numOfDaysInMonth(2011,2);
let revStr = "";
let reverseString = function(str){
	for(let i = str.length - 1;i>=0;i--){
			revStr+=str[i];
	}
	console.log(revStr)
}

reverseString("it is Friday")

let colors = [
                {
                    colorName : "red",
                    r: 255,
                    b: 0,
                    g: 0
                },
                {  
                    colorName : "pink",
                    r: 255,
                    b: 182,
                    g: 192
                },
                {
                    colorName : "brown",
                    r: 210,
                    b: 105,
                    g: 30
                },
                {  
                    colorName : "cyan",
                    r: 0,
                    b: 255,
                    g: 255
                }
            ]
  let arr = []
 
  let colorType = function(){
  	for(let i = 0; i < colors.length;i++){
  			console.log(colors[i].b);
  		 if(colors[i].b > 100 && colors[i].g > 100){
  		 		arr.push(colors[i]);
  		 }
  	}


  }
  colorType();
  console.log(arr)

