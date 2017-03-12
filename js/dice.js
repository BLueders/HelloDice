$(function(){

	var counter = 0;

	$('.debug-setup-button').click(function(){
		create_new_dice();
		create_new_dice();
		create_new_dice();
		
		create_new_side_row(1,0);
		create_new_side_row(1,1);
		create_new_side_row(2,0);
		create_new_side_row(2,1);
		create_new_side_row(2,2);
		create_new_side_row(3,0);

		$('.die-side-input').each(function(i){
			$(this).val(i);
		});
		
	});
	
	
	
	$('.add-die-button').click(function() {
		create_new_dice();
	});

	$('.roll-dice-button').click(function() {
		roll_the_dice();
	});
	
	$('.dice-container').on('change', '.sides-input', function(e) {
		var value = $(this).val();
		
		if(value > 99){
			$(this).val(99);
		}
	});
	
	$('.dice-container').on('keyup', '.sides-input', function(e) {
		var value = $(this).val();
		
		if (e.keyCode == 13) {			
			var dieBox = $(this).parents('.die-box');
			var dieID = dieBox.attr('data-die-id');
			//dieBox.find('.die-sides-container').empty();
	
			for(var i=0;i<value;i++)
			{
				create_new_side_row(dieID, i);
			}
		    return false; // prevent the button click from happening
		}
	});
	
	function create_new_dice()
	{
		counter++;
		
		var newDiceCopy = $('.die-box-template').clone();
		newDiceCopy.appendTo('.dice-container');
		newDiceCopy.removeClass('die-box-template');
		newDiceCopy.addClass('die-box-'+counter);
		newDiceCopy.find('.die-id > .die-id-text').html(counter);
		newDiceCopy.attr('data-die-id', counter);
		var dieSide0 = newDiceCopy.find('.die-sides-container > .die-side-row');
		dieSide0.attr('.data-side-id', counter);
		dieSide0.find('.die-side-text').html(counter);
	}
	
	function create_new_side_row(die_id, index)
	{
		var dieBox = $('.dice-container > .die-box-'+die_id);
		var newSideCopy =$('.die-side-row-template').clone();
		newSideCopy.removeClass('die-side-row-template');
		newSideCopy.appendTo(dieBox.find('.die-sides-container'));
		//newSideCopy.appendTo(dieBox.find('.die-sides-container'));
		newSideCopy.attr('data-side-id',index);
		newSideCopy.find('.die-side-text').html(index);
		//console.log(newSideCopy);
	}
	
	function roll_the_dice(){
		var diceContainer = $('.dice-container');
		var diceElements = diceContainer.find('.die-box');
		var dice = [];
		diceElements.each(function(die){
			dice[die] = new Die();
			var sidesElements = $(this).find('.die-sides-container > .die-side-row');
			sidesElements.each(function(side){
				var inputField = $(this).find('.die-side-input');
				dice[die].sides[side] = inputField.val();
				console.log(inputField);
				console.log(inputField.val());
			});
			// console.log(dice);
		});
	}
});

function Die(){
	this.sides = [];
}

function DieSite(){
	this.siteValue = 0;
}


// var errorDiv = document.getElementById("errorDiv"),
                    // regex = /^[a-z0-9]+$/,
                    // str = document.getElementById("inputString").value;