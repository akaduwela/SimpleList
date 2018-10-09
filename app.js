$(document).ready( function() { 
	$('#button').on('click', function(){
		console.log("adding task")
		var newItem = '<li class= "list-group-item" data-toggle="modal" data-target="#editModal" data-checked="false">' + '<input type="checkbox" class="chck">' + $('input[name=ListItem]').val() + '<span class="glyphicon glyphicon-remove"></span>' + '</li>';
		$('ol').append(newItem);
		$('input[name=ListItem]').val("")
	});

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

	// clicking checkbox to cross out item, but not remove it
    $("ol").on("click", "input", function () {
    
    if (this.checked) {
    	
        $(this).parent().addClass('completed');
        $(this).parents("ol").append($(this).parent());
        // $(this).parent().remove()
    } else {
        $(this).parent().removeClass('completed');
        $(this).parents("ol").prepend($(this).parent());
    }
    });

    // edit panel
	$('ol').on('click', 'li', function(){
		// index = $('li').index(this);
		// var content = items[index];
		// console.log(content);
		$('#edit-input').val("");
	});

	$('#edit-button').click(function(){
		var temp= $('#edit-input').val();
		// loadList(items);
		// storeToLocal("memos", items);
	});
});