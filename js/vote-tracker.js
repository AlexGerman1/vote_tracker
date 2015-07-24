var photo = function (path, number) {
  this.path = path;
  this.number = number;
  this.votes = 0;
}

var cats = [];
var left;
var right;
//   for (var i=0; i<=13; i++) {
//   cats.push(new photo("img/" + i + ".jpg", i));
// }

console.log(cats);
function randomNum(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

function display(lft, rht) {
  console.log(lft);
  $('#pic1').attr("src", cats[lft].path);
  $('#pic2').attr("src", cats[rht].path);

}


  function newDisplay() {
  var left = randomNum(0, 13);
  var right = randomNum(0,13);
  if (left == right) {
    right = randomNum(0, 13);
    display(left, right);
    console.log(left);
  }



console.log(left, right);
}

$('#pic1').click(function(){
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic2').attr("class", "");
  cats[left].votes++;
  chart.segments[0].value = cats[left].votes
  chart.segments[1].value = cats[right].votes
  chart.update();
  storeVotes();
  console.log(cats[left].votes);
});

$('#pic2').click(function(){
  console.dir(right);
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic1').attr("class", "");
  cats[right].votes++;
  chart.segments[1].value = cats[right].votes
  chart.segments[0].value = cats[left].votes
  chart.update();
  storeVotes();

  console.log(cats[right].votes);
});

$('#reroll').click(function(){
  $('#pic1').attr("src", "").removeClass("winner");
  $('#pic2').attr("src", "").removeClass("winner");
  newDisplay();
  display();
});


            // pie chart data
            var pieData = [
                {
                    value: 1,
                    color:"#878BB6"
                },
                {
                    value : 1,
                    color : "#4ACAB4"
                },
            ];
            // pie chart options
            var pieOptions = {
                 segmentShowStroke : false,
                 animateScale : true
            }
            // get pie chart canvas
            var myChart= document.getElementById("myChart").getContext("2d");

            // draw pie chart
            var chart = new Chart(myChart).Pie(pieData, pieOptions);

  if(!localStorage.getItem('CatVotes')) {
  populateStorage();
} else {
  storeVotes();
}


  function storeVotes(){
    localStorage.setItem('CatVotes',JSON.stringify(cats));

  }
  function retrieveVotes(){
    var retrievedVotes = localStorage.getItem('CatVotes');
    // // if(retrievedVotes != null){
    //   cats = JSON.parse(retrievedVotes);
    cats = localStorage.getItem("CatVotes");
    }
    function start(){
      for (var i=0; i<=13; i++) {
  cats.push(new photo("img/" + i + ".jpg", i));

newDisplay();
 display();
retrieveVotes();
console.dir(cats);
  }
 }
start();
