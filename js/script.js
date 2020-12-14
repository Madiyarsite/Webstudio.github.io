document.addEventListener('DOMContentLoaded', function(){
let promo = require('./blocks/promo'),
    rgb = require('./blocks/designer'),
    timer = require('./blocks/timer'),
    header = require('./blocks/header');



promo();
header();
rgb();
timer();
});