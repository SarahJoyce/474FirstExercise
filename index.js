$(function(){
    //this code runs after page is fully loaded
    $('#nameform').on('submit', function(event){
        event.preventDefault();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        $("div.jumbotron h1").text(lname + ", " + fname);
        $("div.jumbotron").removeClass('d-none');
        return false;
    })
});