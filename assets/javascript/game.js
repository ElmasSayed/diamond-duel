
$( document ).ready(function() {

	//main - start
	var target = 0;
	var diamond1 = 0;
	var diamond2 = 0;
	var diamond3 = 0;
	var diamond4 = 0;
	generateDiamondsAndTargetNumbers();
	//main - end

	function generateDiamondsAndTargetNumbers(){

		// Generate Target number
		target = randomNumberFromRange(19,120);
		$("#targetnumber").html(target);


		// Give random number to diamonds
		// Check previous numbers for no duplications

		// Generate Diamond1
		diamond1 = randomNumberFromRange(1,12);
		$("#diamond1").val(diamond1);

		// Generate Diamond2
		while (true){
			diamond2 = randomNumberFromRange(1,12);
			if (diamond2 != diamond1){
				break;
			}	
		}	
		$("#diamond2").val(diamond2);
		
		// Generate Diamond3
		while (true){
			diamond3 = randomNumberFromRange(1,12);
			if ((diamond3 != diamond1) && (diamond3 != diamond2)){
				break;
			}
		}
		$("#diamond3").val(diamond3);

		// Generate Diamond4
		while (true){
			diamond4 = randomNumberFromRange(1,12);
			if ((diamond4 != diamond1) && (diamond4 != diamond2) && (diamond4 != diamond3)){
				break;
			}
		}
		$("#diamond4").val(diamond4);
	}

	function randomNumberFromRange(min,max){
		//return random number
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	//Onclick of each diamond, add diamond values to the total value and decide the game
	$(".btn").on("click", function(){

		// alert(this.id)

		$("#msg").text("");	//remove previous games message

		var wins = parseInt($("#wins").text());
		var losses = parseInt($("#losses").text());
		var total = parseInt($("#total").text());

		if (this.id == "img1"){
			total = total + diamond1;
		}

		if (this.id == "img2"){
			total= total + diamond2;
		}

		if (this.id == "img3"){
			total= total + diamond3;
		}

		if (this.id == "img4"){
			total= total + diamond4;
		}

		$("#total").text(total);

		if (target == total){
			$("#msg").html("You Win!!!")
			wins = wins + 1;
			$("#wins").text(wins);
			generateDiamondsAndTargetNumbers(); //restart game
			total=0;
			$("#total").text(total);			
		}else if(target < total){
			$("#msg").html("You Lose!!!")	
			losses = losses + 1
			$("#losses").text(losses);
			generateDiamondsAndTargetNumbers(); //restart game
			total=0;
			$("#total").text(total);			
		}

	});

	
});
