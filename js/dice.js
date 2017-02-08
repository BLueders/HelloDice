$(function(){

	var counter = 0;

	$('.add-die-button').click(function() {
		create_new_dice();
	})
	
	
	
	$('.dice-container').on('keyup', '.sides-input', function(e) {
		
		if (e.keyCode == 13) {
			var dieBox = $(this).parent('.die-box');
			var dieID = dieBox.attr('data-die-id');
			//dieBox.find('.die-sides-container').empty();
			var value = $(this).val();
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
		
		var dieBox = $('.dice-container > .die-box-'+counter);
		var newSideCopy =$('.die-side-row-template').clone();
		newSideCopy.removeClass('die-side-row-template');
		newSideCopy.appendTo(dieBox);
		//newSideCopy.appendTo(dieBox.find('.die-sides-container'));
		newSideCopy.attr('data-side-id',index);
		newSideCopy.find('.die-side-text').html(index);
		console.log(newSideCopy);
	}
	
});

function Die(){
	this.sites = [];
}

function DieSite(){
	this.siteValue = 0;
}