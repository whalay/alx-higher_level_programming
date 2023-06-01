//Write a JavaScript script that adds a <li> element to a list when the user clicks on the tag DIV#add_item
//The new element must be: <li>Item</li>

$("#add_item").click(function(){
    $('.my_list').append('<li>Item</li>')
});
