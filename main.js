let win = [
  ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
  ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"],
  ["1", "5", "9"], ["3", "5", "7"]
]
// i = 0
let player1 = []
let player2 = []
var click =0
var win1 = false
// function 
var flag = true
$(".button").click(function (e) {

  $(".col").html("");
  $(".col").removeClass("clicked");

  player1 = []
  player2 =[]

  flag = true
  click =0
win1 = false


  $('.col').css('pointer-events','auto')


})

// players
$(".col").click(function (e) {

// let x = false;
  if (!$(this).hasClass("clicked")) {
    if (flag) {
      $(this).html("X");
      $(this).addClass("clicked");
      player1.push(e.target.id)
  flag = !flag
      win.forEach(ele => {
        if (player1.includes(ele[0]) && player1.includes(ele[1]) && player1.includes(ele[2]) ){
          Swal.fire(
            'Player X won!!'
          )
          win1 = true
          $('.col').css('pointer-events','none')        }
      });

    }

    else  {
      $(this).html("O");
      $(this).addClass("clicked");
      player2.push(e.target.id)
      flag = !flag
      
      win.forEach(ele => {
        if (player2.includes(ele[0]) && player2.includes(ele[1]) && player2.includes(ele[2]) ){

          Swal.fire(
            'Player O won!!'
          )
          // x = true
          $('.col').css('pointer-events','none')
                }

      });

    }
    click ++
    console.log(click)
    if (click == 9 && !win1){

      Swal.fire(
        'Draw!!'
      )
    }
  }
 

  
 


});
