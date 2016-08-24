var randomGenerator = function () {
  return Math.floor(Math.random() * 100);
};

var problem = function () {
  let arr = [],
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

let gameTimer = function (time) {
  if (time >= 0) {
    setTimeout(function () {
      $('.timer').text(time);
      time -= 1;
      gameTimer(time);
    }, 1000);
  }
};

gameTimer(30);
