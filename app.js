$(document).ready( function() { 

	// clicking '+' button
	$('#button').on('click', function(){
		console.log("adding task")
		var newItem = '<li class= "list-group-item" data-toggle="modal" data-target="#editModal" data-checked="false">' + '<input type="checkbox" class="chck">' + $('input[name=ListItem]').val() + '<span class="glyphicon glyphicon-remove"></span>' + '</li>';
		$('ol').append(newItem);
		$('input[name=ListItem]').val("")
	});

	// clicking 'Clear all tasks' button
	$('#button1').on('click', function(){
		console.log("removing all tasks")
		$('ol').empty();
		$('input[name=ListItem]').val("")
	});

	// clicking 'x' button to completely remove item
	$('ol').on("click", "span", function(event){
	index = $('span').index(this);
	$('li').eq(index).remove();
	});

	// clicking checkbox to cross out item, but not remove it, or vice versa
    $("ol").on("click", "input", function () {
    
    if (this.checked) {
    	
        $(this).parent().addClass('completed');
        $(this).parents("ol").append($(this).parent());
    } else {
        $(this).parent().removeClass('completed');
        $(this).parents("ol").prepend($(this).parent());
    }
    });
});