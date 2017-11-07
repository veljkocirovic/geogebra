$('#footer-year').html(new Date().getFullYear());

$('.footer-link').click(function(e){
    e.preventDefault();
    app.loadState($(this).attr('data-state'));
})