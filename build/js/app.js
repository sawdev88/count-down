'use strict';

var randomGenerator = function randomGenerator() {
  return Math.floor(Math.random() * 100);
};

var problem = function problem() {
  var arr = [],
      ran1 = randomGenerator(),
      ran2 = randomGenerator();

  arr[0] = ran1;
  arr[1] = ran2;

  return arr;
};

var solution = problem().reduce(function (total, num) {
  return total + num;
});

console.log(solution);

var gameTimer = function gameTimer(time) {
  if (time >= 0) {
    setTimeout(function () {
      $('.timer').text(time);
      time -= 1;
      gameTimer(time);
    }, 1000);
  }
};

gameTimer(30);