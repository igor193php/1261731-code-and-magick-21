'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
const FIRE_BALL_SPEED_IN_THE_WIND = 5;
const FIRE_BALL_SPEED_AGAINST_THE_WIND = 2;
const NUMBER_MATH_HEIGHT = 1.33; 

var getFireballSpeed = function(isMovingLeft) {
    return isMovingLeft ? FIRE_BALL_SPEED_AGAINST_THE_WIND : FIRE_BALL_SPEED_IN_THE_WIND;

}

/**
 * Возвращает высоту мага;
 * 
 */
var getWizardHeight = function () {
    return NUMBER_MATH_HEIGHT * wizardWidth;

}

/**
 * Возвращает начальное положение мага, по горизонтали, на игровом поле. 
 * Ширину и высоту игрового поля функция получает аргументом.
 * 
 */
var getWizardX = function(gameFieldWidth) {
    return (gameFieldWidth - wizardWidth) / 2;
}

/**
 * Возвращает начальное положение мага, по вертикали, на игровом поле. 
 * Ширину и высоту игрового поля функция получает аргументом.
 * 
 */
var getWizardY  = function(gameFieldHeight) {
    return gameFieldHeight / 3;
}
