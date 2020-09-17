'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

/**
 * Возвращает скоростью фаербола в зависимости от направления ветра в игре. 
 * Направление функция будет получать аргументом; 
 * 
 * 
 */
var getFireballSpeed = function(isMovingLeft) {
    return isMovingLeft ? 2 : 5;

}

/**
 * Возвращает высоту мага;
 * 
 */
var getWizardHeight() {
    return 1.337 * wizardWidth;

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
