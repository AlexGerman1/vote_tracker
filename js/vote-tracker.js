var photo = function (path, number) {
  this.path = path;
  this.number = number;
  this.votes = 0;
}

var cats = [];
var left = undefined;
var right = undefined;for (var i=0; i<=13; i++) {
  cats.push(new photo("img/" + i + ".jpg", i));
}

console.log(cats);function randomNum(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

function display() {
  $('#pic1').attr("src", cats[left].path);
  $('#pic2').attr("src", cats[right].path);
}

newDisplay();
  display();function newDisplay() {
  left = randomNum(0, 13);
  right = randomNum(0,13);
  if (left == right) {
    right = randomNum(0, 13);
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
  console.log(cats[left].votes);
});

$('#pic2').click(function(){
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic1').attr("class", "");
  cats[right].votes++;
  chart.segments[1].value = cats[right].votes
  chart.segments[0].value = cats[left].votes
  chart.update();
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



// // Get context with jQuery - using jQuery's .get() method.
// var ctx = $("#myChart").get(0).getContext("2d");
// // This will get the first returned node in the jQuery collection.

// // And for a doughnut chart
// var myDoughnutChart = new Chart(ctx).Doughnut(data);;
//  var data = [
//    {
//         value: 5,
//         color:"#F7464A",
//         highlight: "#FF5A5E",
//         label: "Red"
//     },
//     {
//         value: 5,
//         color: "#46BFBD",
//         highlight: "#5AD3D1",
//         label: "Green"
//     }
// ]
// myChart.onclick = function(evt){
//     var activePoints = myDoughnutChart.getSegmentsAtEvent(evt);
//     // => activePoints is an array of segments on the canvas that are at the same position as the click event.
// };

// myDoughnutChart.segments.value = 10;
// // Would update the first dataset's value of 'Green' to be 10
// myDoughnutChart.update();
// // Calling update now animates the circumference of the segment 'Green' from 50 to 10.
// // and transitions other segment widths
// // An object in the same format as the original data source
// myDoughnutChart.addData({
//     value: 10,
//     color: "#B48EAD",
//     highlight: "#C69CBE",
//     label: "Purple"
// });
// // The new segment will now animate in.
