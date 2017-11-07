app.loadPartials([
    { id: '#small-header', path: consts.partialsPath + 'small-header.partial.html' },
]);

$('.carousel').carousel({
    interval: 3000
})
$('#all-labors').click(function(e){
    e.preventDefault();
    app.loadState($(this).attr('data-state'), $(this).attr('data-state-params'));
})