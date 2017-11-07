$('#all-materials').click(function(e){
    e.preventDefault();
    app.loadState($(this).attr('data-state'), $(this).attr('data-state-params'));
})