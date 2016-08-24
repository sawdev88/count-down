// User score
let score = 0;

// Random number generator
var randomGenerator = function (num) {
  return Math.floor(Math.random() * num);
};

// Create random number to become sum
var problem = function () {
  let arr = [],
      ran1 = randomGenerator(100),
      ran2 = randomGenerator(100);

  arr[0] = ran1;
  arr[1] = ran2;

  return arr;
};

// Shuffle array values
var shuffle = (arr) => {
  for (var i = arr.length-1; i >=0; i--) {

      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = arr[randomIndex];

      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
  }
  return arr;
};

//Set game and play logic
var showProblemGetAnswer = function () {
  let sum,
      arr,
      btn,
      shuffled;

  var resetGame = function () {
    arr = problem();

    arr.reduce((total, num) => {
      sum = total + num;
    });

    $('.problem').text(sum);

    btn = [arr, problem(), problem(), problem()];
    shuffled = shuffle(btn);

    $('.button1').text(shuffled[0].join(' + ')).val(shuffled[0]);
    $('.button2').text(shuffled[1].join(' + ')).val(shuffled[1]);
    $('.button3').text(shuffled[2].join(' + ')).val(shuffled[2]);
    $('.button4').text(shuffled[3].join(' + ')).val(shuffled[3]);
  };

  resetGame();

  $('button').click(function(){
    let choice = $(this).val(),
        compare = arr.join();

    if (choice === compare) {
      resetGame();
      score += 1;
      $('.score').text(score);
    } else {
      resetGame();
    }
  });

}();

// Game timer. Buttons are disabled after 
var gameTimer = function (time) {
  if (time >= 0) {
    setTimeout(function () {
      $('.timer').text(time);
      time -= 1;
      gameTimer(time);
    }, 1000);
  } else {
    $('#buttons button').attr("disabled", true);
  }
};

gameTimer(30);
