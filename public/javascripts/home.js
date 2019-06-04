/*****************************************************************
* Simple Functions for the FTC Homepage (Brian Aguilar):
*
* textChange() - Changes banner text into one of many well-thought
* one-liners about the FTC.
*****************************************************************/

function textChange () {
  //Array of awesome FTC inspired one-liners
  var bannerText = ["The Call Ends Here.", "Is your phone on?", "Submit your tickets!", "Just ask Connor.", "Where's Brother Wilcock?", "Mac > Windows", "Mac < Windows"];

  //Just a random number depending on amount of items in bannerText
  var num = Math.floor(Math.random() * (bannerText.length));

  //Checking number on console
  console.log(num);

  //Changes HTML elements HTML to a random one-liner
  document.getElementById("bText").innerHTML = '<div class="animated bounceIn">' + bannerText[num] + '</div>';
};
