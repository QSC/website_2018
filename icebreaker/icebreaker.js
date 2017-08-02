var lvlCount = 0;
var loseString = '';
//Game Object
var game = [
 	//Level 0
	{
		key: "start",
		title: "0",
		header: "Crash Landing!!",
		story: "You're ship has crashed, and you find yourself stranded! Desert surrounds you in all directions",
		img: "img/desert.gif",
		options: [{txt:"Head to the Mountains", link: 'a1'},
				  {txt:"Head to the Ocean", link: 'b1'},
				  {txt:"Head to the Caves", link: 'end'}],
		endText: "The caves were filled with aliens.  Bad news bears.  They have taken you for experimentation."

	},
	{
		key: "end",
		title: "You Lose!",
		header: "Uh Oh :(",
		story: ("You survived " + getlvlCount() + " levels" + "\n" + loseString),
		img: "img/explosion.gif",
		options: [{txt:"Restart", link: 'start'}]

	},
	//Level 1
	{//Mountains
		key: "a1",
		title: "1",
		header: "The Mountains",
		story: "You make it to the mountains, but you're exhausted and the light is fading, what next?",
		img: "img/mountain.gif",
		options: [{txt:"Try to make a fire", link: 'a2'},
				  {txt:"Scavenge for food", link: 'b2'},
				  {txt:"Check out the nearby boulders", link: 'end'}],
		endText: "The boulders were extremely loose.  They come unlodged and crush you."
	},
	{//Ocean
		key: "b1",
		title: "1",
		header: "The Ocean",
		story: "Sandy beaches!  The Ocean!  On the sand you can see faint footprints, a survivor possibly?  Your stomach growls.",
		img: "img/ocean.gif",
		options: [{txt:"Swim into the ocean", link: 'end'},
				  {txt:"Scavenge for food", link: 'b2'},
				  {txt:"Search for survivors", link: 'c2'}]
	},
	//Level 2
	{//Make a fire
		key: "a2",
		title: "2",
		header: "The fire crackles warm.",
		story: "After trying for SEVERAL hours you get the fire started.  What's the plan?",
		img: "img/fire.gif",
		options: [{txt:"Make a signal with the smoke", link: 'a3'},
				  {txt:"Search for more firewood", link: 'b3'},
				  {txt:"Use fire to search nearby caves", link: 'end'}]
	},
	{//scavenge for food
		key: "b2",
		title: "2",
		header: "Scavenger",
		story: "You found some strange looking leafs which you eat.  You feel very happy... too happy.  You see firewood nearby and footprints in the ground.",
		img: "img/leaves.gif",
		options: [{txt:"Gather the wood", link: 'b3'},
				  {txt:"Eat more leaves, they taste sooo gooood.", link: 'end'},
				  {txt:"Follow the footprints", link: 'c3'}]
	},
	{//search for survivors
		key: "c2",
		title: "2",
		header: "You search for survivors",
		story: "You find a cluster of strange looking trees.  You see very large claw-like footprints, humanoid footprints, and a mysterious piece of technology",
		img: "img/trees.gif",
		options: [{txt:"Follow the humanoid footprints", link: 'c3'},
				  {txt:"Follow the larger prints ", link: 'end'},
				  {txt:"Investigate the tech", link: 'd3'}]
	},
	//Level 3
	{//
		key: "a3",
		title: "3",
		header: "You make a signal out of smoke",
		story: "",
		img: "",
		options: [{txt:"", link: 'end'},
				  {txt:"", link: 'end'},
				  {txt:"", link: 'end'}]
	},
	{//
		key: "b3",
		title: "3",
		header: "Uh oh, that's note firewood",
		story: "",
		img: "",
		options: [{txt:"", link: 'end'},
				  {txt:"", link: 'end'},
				  {txt:"", link: 'end'}]
	},
	{//
		key: "c3",
		title: "3",
		header: "You find Bob, the IT guy from the crew",
		story: "",
		img: "",
		options: [{txt:"", link: 'end'},
				  {txt:"", link: 'end'},
				  {txt:"", link: 'end'}]
	},
	{//
		key: "d3",
		title: "3",
		header: "You check out the tech",
		story: "",
		img: "",
		options: [{txt:"", link: 'end'},
				  {txt:"", link: 'end'},
				  {txt:"", link: 'end'}]
	},
];

function killCover(){
	var cover = document.body.querySelector("#cover");
	document.body.removeChild(cover);
}

function getlvlCount(){
	return lvlCount;
}
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
	var letterSelected = getSelection();
	lvlCount++;
	initSlide(letterSelected);
}

function getSelection(){
	var radios = document.body.querySelectorAll("input");
	var selected = null;
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked == true)
			selected = radios[i].value;
	}
	console.log(selected + " selected");
	return selected;
}

function showEndText(currentObject){
	console.log("inside showEndText");
	if(currentObject.endText){
		console.log(".endText exists");
		loseString = currentObject.endText;
	}else{
		loseString = "Better luck next time!"
	}
}
function initSlide(letter){

	//find gameObject
	var keys = Object.keys(game);
	var currentObject = null;
	for(var i = 0; i < keys.length; i++){
		if(letter === game[keys[i]].key){
			//console.log("check passed: " + game[keys[i]].key );
			currentObject = game[keys[i]];
		}
	}
	//Update end text link
	showEndText(currentObject);
	//reset lvl count
	if(currentObject.key == "start"){
		lvlCount = 0;
	}

	//Update title
	var title =  document.body.querySelector("#title");
	title.textContent = currentObject.title;
	//Update Header
	document.body.querySelector("#storyHeader").textContent = currentObject.header;
	//Update Story
	document.body.querySelector("#storyText").innerHTML = currentObject.story;
	//Update Image
	document.body.querySelector("#slideImage").style.backgroundImage = 'url('+currentObject.img+')';

	
	//Associate Labels to their inputs
	var labels = document.getElementsByTagName('LABEL');
	for (var i = 0; i < labels.length; i++) {
	    if (labels[i].htmlFor != '') {
	         var elem = document.getElementById(labels[i].htmlFor);
	         if (elem)
	            elem.label = labels[i];         
	    }
	}

	//update labels
	//Update button pointers
	var inputs = document.body.querySelectorAll("input")

	//end game condition -- special
	if(currentObject.key == "end" && lvlCount != 0){/////////added lvlCount != 0!!!!
		for(var i = 0; i < inputs.length - 1; i++){
			//inputs[i].parentNode.parentNode.removeChild(inputs[i].parentNode);
			inputs[i].parentNode.style.visibility = "hidden";
		}
		var inputs = document.body.querySelectorAll("input");
		for(var i = 0; i < inputs.length; i++){
			if(inputs[i].parentNode.style.visibility == "visible")
				var input = inputs[i];
		}

		input.label.innerHTML = currentObject.options[0].txt;
		input.value = currentObject.options[0].link;
		console.log("end game link: " + currentObject.options[0].link);
		//custom story update
		var endString = "Levels Survived: " + getlvlCount() + "<br><br>" + loseString;
		document.body.querySelector("#storyText").innerHTML = endString;
		lvlCount = 0;
		return;
	}

	for(var i = 0; i < inputs.length; i++){
		inputs[i].parentNode.style.visibility = "visible";
		inputs[i].label.innerHTML = currentObject.options[i].txt;// + " -> " + currentObject.options[i].link ;
		inputs[i].value = currentObject.options[i].link;
		//options[i].childNode.innerHTML = "weeo";
	}
	
}
