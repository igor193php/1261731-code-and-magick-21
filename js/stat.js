'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
    
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff');
    ctx.font = "16px PT Mono";
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', 230, 30);
    ctx.fillText('Список результатов:', 210, 50);

    ctx.fillText('Вы', 110, 75);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(160, 60, 40, 150);
    
}
