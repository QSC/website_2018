console.log("enterered main script");
var lvlCount = 0;
//Game Object
var game = [
	{
		title: "Level 1",
		header: "Crash Landing!!",
		story: "You're ship has crashed, and you find yourself stranded! Desert surrounds you in all directions",
		img: "img/desert.gif"
	},
	{
		title: "Level 2",
		header: "In The Desert",
		story: "Content Lvl 2"
	}
];

//element creator
function elt(name, attributes) {
  var node = document.createElement(name);
  if (attributes) {
    for (var attr in attributes)
      if (attributes.hasOwnProperty(attr))
        node.setAttribute(attr, attributes[attr]);
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }
  return node;
}

function nextSlide(){
	lvlCount++;
	initSlide();
}

function initSlide(){
	console.log("in initSlide");
	//Update title
	var title =  document.body.querySelector("#title");
	title.textContent = game[lvlCount].title;
	//Update Header
	document.body.querySelector("#storyHeader").textContent = game[lvlCount].header;
	//Update Story
	document.body.querySelector("#storyText").innerHTML = game[lvlCount].story;

	//Update Image
	document.body.querySelector("#slideImage").style.backgroundImage = 'url('+game[lvlCount].img+')';
}
