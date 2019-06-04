var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");

init();
function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6;
		reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "black";
			messageDisplay.textContent = "Try again!";
		}
		});
	}
}

function reset(){
	//get new colors
	colors = generateRandomColors(numSquares);
	//get new picked color
	pickedColor = pickColor();
	//text change
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change square colors
	for (var i = 0; i < squares.length;i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});


function changeColor(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//red piker 0-255
	var red = Math.floor(Math.random()*256);
	//green picker 0-255
	var green = Math.floor(Math.random()*256);
	//blue piker 0-255
	var blue = Math.floor(Math.random()*256);
	//return "rgb(red, green, blue)"
	return "rgb(" + red + ", "+ green + ", " + blue + ")";
}