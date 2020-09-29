'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 20;
const barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;

const renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function(arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

    ctx.font = "16px PT Mono";
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', 230, 30);
    ctx.fillText('Список результатов:', 210, 50);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillText(
      names[i],
      CLOUD_X + GAP,
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i
    );
    ctx.fillRect(
      CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i,
      (barWidth * times[i]) / maxTime,
      BAR_HEIGHT
    );
  }
};


/*
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

    ctx.fillText('Вы', 170, 250);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(160, 80, 40, 150);

}
*/

