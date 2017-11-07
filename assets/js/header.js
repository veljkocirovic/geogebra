$(document).ready(function () {
    var scene = $('#scene')[0];
    var parallax = new Parallax(scene);
    particlesJS.load('layer1', 'assets/json/particlesjs-layer1-config.json', function () { });
    particlesJS.load('layer2', 'assets/json/particlesjs-layer2-config.json', function () { });
})