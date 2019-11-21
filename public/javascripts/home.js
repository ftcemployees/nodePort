/*****************************************************************
* Simple Functions for the FTC Homepage (Brian Aguilar):
*
* textChange() - Changes banner text into one of many well-thought one-liners about the FTC.
* nightMode() - Changes css properties to create a dark mode
*****************************************************************/

function textChange () {
  //Array of awesome FTC inspired one-liners
  var bannerText = ["The Call Ends Here.", "Is your phone on?", "Submit your tickets!", "Just ask Aaron.", "Where's Brother Wilcock?", "Mac > Windows", "Mac < Windows"];

  //Just a random number depending on amount of items in bannerText
  var num = Math.floor(Math.random() * (bannerText.length));

  //Checking number on console
//   console.log(num);

  //Changes HTML elements HTML to a random one-liner
  document.getElementById("bText").innerHTML = '<div class="animated bounceIn">' + bannerText[num] + '</div>';
};

var isNight = false; //Variable for night mode
function nightMode() {
  //Change background colors of navbar and body
  $("body").toggleClass("nightMode");
  $(".navbar-default").toggleClass("nightMode");

  //Changes navbar text colors to white
  if (isNight == false) {
    $(".navbar-default .navbar-nav li a").css("color", "#FFF");
    $(".navbar-default .navbar-nav li a:hover, .navbar-default .navbar-nav li a:focus").css("color", "#FFF");
    $(".navbar-default .navbar-nav li a span").css("color", "#FFF");
    $(".dropdown-menu li a").css("color", "#262626");
    $("#logoText").html('<img alt="FTC logo" src="/images/FTC-Logo.svg" style="padding-top: 10px;"/>');
    isNight = true;
  } else {
    $(".navbar-default .navbar-nav li a").css("color", "#262626");
    $(".navbar-default .navbar-nav li a:hover, .navbar-default .navbar-nav li a:focus").css("color", "#262626");
    $(".navbar-default .navbar-nav li a span").css("color", "#262626");
    $("#logoText").html('<img alt="FTC logo" src="/images/FTC-LogoBlack.png" style="padding-top: 10px;"/>');
    isNight = false;
  }

  // //Black Logo
  // var t1 = '<img alt="FTC logo" src="css/images/FTC-LogoBlack.png" style="padding-top: 10px;"/>';
  // //White Logo
  // var t2 = '<img alt="FTC logo" src="css/images/FTC-Logo.svg" style="padding-top: 10px;"/>';
  //
  // var current = $("#logoText").html();
  // console.log(current);
  // console.log($("#logoText").html());
  //
  // if (current == t1) {
  //   $("#logoText").text(t2); //Black to White
  // } else {
  //   $("#logoText").text(t1); //White to Black
  // }
}

//Tuesday Meeting Reminder
var alertElement = document.getElementById("alertElement");
var d = new Date();
var day = 2;
console.log(day);

if (day === 2) {
  alertElement.style.display = "block";
}
