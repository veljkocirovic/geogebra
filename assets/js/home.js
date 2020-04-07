app.loadPartials([
    {id: '#header', path: consts.partialsPath + 'header.partial.html', script: consts.assetsPath + 'js/header.js'},
    {id: '#home-projects', path: consts.partialsPath + 'projects.partial.html'},
    {id: '#home-materials', path: consts.partialsPath + 'materials-home.partial.html', script: consts.assetsPath + 'js/materials-home.js'}
]);


$('.news-link').click(function(e){
    if(!$(this).attr('data-state')){
        return;
    }
    e.preventDefault();s
    app.loadState($(this).attr('data-state'), $(this).attr('data-state-params'));
})