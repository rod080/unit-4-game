
var startingNum;
var loss = 0;
var win = 0;
var prevNum = 0;


let gemsImg = [ 
"assets/images/gem1.jpg"
"./assets/images/gem1.jpg",
"./assets/images/gem2.jpg",
"./assets/images/gem3.jpg",
"./assets/images/gem4.jpg",
]

var startGame = function () {
    $("#gems").empty();

    startingNum = Math.floor(Math.random() * 120) + 19;

    $("#result").html('Your number: ' + startingNum);

    for (var i = 0; i < 4; i++) {

        var randomNum = Math.floor(Math.random() * 12 + 1)

        var gemBtn = $("<div>");
        gemBtn.attr({
            "class": 'gems',
            "data-random": randomNum,
            "style": "background-image: url(" + gems[i] + "); background-repeat: no-repeat;"
            // "background-image: url(./assets/images/pokeball.png)"
        });
        $("#gems").append(gemBtn);
    }
}