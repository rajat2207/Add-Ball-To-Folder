var color=['red','blue','yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson'];

$('#button').click(function () {
    $('#basket').append('<div class="balls" style="background-color:'+color[Math.floor(Math.random()*15)]+'"></div>');
})