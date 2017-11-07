var shadowInd = false;

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        if (shadowInd === false) {
            navigationShadow('add');
            shadowInd = true;
        }
    } else {
        if (shadowInd === true) {
            navigationShadow('remove');
            shadowInd = false;
        }
    }

})

function navigationShadow(state) {
    if (state === 'add') {
        $('nav').addClass('box-shadow-small');
    } else {
        $('nav').removeClass('box-shadow-small');
    }
}

$('.nav-link').click(function (e) {
    e.preventDefault();
    app.loadState($(this).attr('data-state'));
    if ($('.navbar-toggler').eq(0).is(':visible')) {
        $('.navbar-toggler').eq(0).click();
    }
})

