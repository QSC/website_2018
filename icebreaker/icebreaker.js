var lvlCount = 0, topScore = 0;
var loseString = '';
//Game Object
var game = [
 	//Level 0
	{
		key: "start",
		title: "In the Beginning",
		header: "Crash Landing!!",
		story: "You're ship has crashed, and you find yourself stranded! Desert surrounds you in all directions",
		img: "img/desert.gif",
		options: [{txt:"Head to the Mountains", link: 'a1'},
				  {txt:"Head to the Ocean", link: 'b1'},
				  {txt:"Head to the Caves", link: 'end'}],
		endText: "You trip and fall on the way to the caves.  You die instantly... the next day :("

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
		title: "Mountain Man",
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
		title: "Surfin' in Space",
		header: "The Ocean",
		story: "Sandy beaches!  The Ocean!  On the sand you can see faint footprints, a survivor possibly?  Your stomach growls.",
		img: "img/ocean.gif",
		options: [{txt:"Swim into the ocean", link: 'end'},
				  {txt:"Scavenge for food", link: 'b2'},
				  {txt:"Search for survivors", link: 'c2'}],
		endText: "You drown.  The waves on this planet are HUGE.  Gravity 1, You 0."
	},
	//Level 2
	{//Make a fire
		key: "a2",
		title: "Evolving",
		header: "The fire crackles warm.",
		story: "After trying for SEVERAL hours you get the fire started.  What's the plan?",
		img: "img/fire.gif",
		options: [{txt:"Make a signal with the smoke", link: 'a3'},
				  {txt:"Search for more firewood", link: 'b3'},
				  {txt:"Use fire to search nearby caves", link: 'end'}],
		endText: "Caves = no good.  Super bad and vague things happen and you die.  Careful for caves!"
	},
	{//scavenge for food
		key: "b2",
		title: "Food!",
		header: "Scavenger",
		story: "You found some strange looking leafs which you eat.  You feel very happy... too happy.  You see firewood nearby and footprints in the ground.",
		img: "img/leaves.gif",
		options: [{txt:"Gather the wood", link: 'b3'},
				  {txt:"Eat more leaves.", link: 'end'},
				  {txt:"Follow the footprints", link: 'c3'}],
		endText: "The leaves make you very sick and you die."
	},
	{//search for survivors
		key: "c2",
		title: "Anyone? Bob?",
		header: "You search for survivors",
		story: "You find a cluster of strange looking trees.  You see very large claw-like footprints, humanoid footprints, and a mysterious piece of technology",
		img: "img/trees.gif",
		options: [{txt:"Follow the humanoid footprints", link: 'c3'},
				  {txt:"Follow the larger prints", link: 'end'},
				  {txt:"Investigate the tech", link: 'd3'}],
		endText: "The prints lead to a very large insectodactalion which eats you alive."
	},
	//Level 3
	{//Smoke signal
		key: "a3",
		title: "Smokin' in Space",
		header: "You make a signal out of smoke",
		story: "After several hours, you see what looks like a pillar of smoke in the distance.  You also here strange sounds coming from the surrounding night.",
		img: "img/space.gif",
		options: [{txt:"Follow the smoke", link: 'c3'},
				  {txt:"Follow the sounds", link: 'end'},
				  {txt:"Camp for the night", link: 'end'}],
		endText: "OMG!! Huge pastoplantopods come out of the woods and attack.. You die instantly... the next day. "
	},
	{//Not firewood
		key: "b3",
		title: "That's Probably Firewood",
		header: "Uh oh, that's not firewood",
		story: "The 'wood' is extremely dense.  When you pick it up it seems to vibrate.  Upon closer inspection, it is most likely, in fact, not wood.",
		img: "img/space.gif",
		options: [{txt:"Try to burn it", link: 'end'},
				  {txt:"Attempt to forge a weapon", link: 'end'},
				  {txt:"Take a closer look", link: 'd3'}],
		endText: "Ooh.  Bad call.  The wood explodes and you're evaporated."
	},
	{//IT BOB
		key: "c3",
		title: "Bob?",
		header: "You see someone",
		story: "It's IT dude Bob from the crew!  He has a fire crackling by his side and seems to be unharmed.  He turns around and makes a strange sound.  He has a crazed look in his eyes.. ",
		img: "img/space.gif",
		options: [{txt:"Ask, 'How are the kids?'", link: 'end'},
				  {txt:"Ask, 'You're not an alien are you?'", link: 'end'},
				  {txt:"Take no chances, attack Bob", link: 'a4'}],
		endText: "You're question triggers something horrible.  An alien tears through Bob and attacks.  You die instantly... the next day."
	},
	{//Mysterious Tech
		key: "d3",
		title: "QCBT",
		header: "You check out the tech",
		story: "The technology is very strange.  As soon as your skin makes contact, it begins to glow and hum loudly.  It leaves your hands and hovers in front of you, then it slowly moves away.",
		img: "img/space.gif",
		options: [{txt:"Follow the object", link: 'b4'},
				  {txt:"It could be a scout!  Attack!!", link: 'end'},
				  {txt:"Attempt to grab it once more", link: 'end'}],
		endText: "The object hums louder and louder until it levels at a screeching frequency.  It glows red hot and then explodes."
	},
	{//Attack Bob
		key: "a4",
		title: "Kung Fu Kenny Now",
		header: "You lunge towards Bob",
		story: "...",
		img: "img/space.gif",
		options: [{txt:"", link: 'end'},
				  {txt:"", link: 'end'},
				  {txt:"", link: 'end'}],
		endText: "You die because the game isn't finished :()"
	},
	{//Follow the object
		key: "b4",
		title: "Choose Wisely",
		header: "You follow the floating object",
		story: "...",
		img: "img/space.gif",
		options: [{txt:"", link: 'end'},
				  {txt:"", link: 'end'},
				  {txt:"", link: 'end'}],
		endText: "You die because the game isn't finished :()"
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
	//Scroll story into view
	var target = document.body.querySelector("#slideStory");
	target.parentNode.scrollTop = target.offsetTop;
	//Initiaite new slide
	initSlide(letterSelected);
}

function getSelection(){
	var radios = document.body.querySelectorAll("input");
	var selected = null;
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked == true)
			selected = radios[i].value;
	}
	// console.log(selected + " selected");
	return selected;
}

function showEndText(currentObject){
	if(currentObject.endText){
		loseString = currentObject.endText;
	}else{
		loseString = "Better luck next time!"
	}
}

function updateScore(){
	if(lvlCount > topScore){
		topScore = lvlCount;
		var score = document.body.querySelector("#topScore").textContent = "High Score: "+(topScore + 1).toString();
	}
}
function initSlide(letter){
	//input help checker
	var inputHelp = document.body.querySelector("#input-help");
	inputHelp.style.visibility = "hidden";
	if(!letter){
		inputHelp.style.visibility = "visible";
		console.log("no letter selected.. returning");
		return;
	}
	//find gameObject
	var keys = Object.keys(game);
	var currentObject = null;
	for(var i = 0; i < keys.length; i++){
		if(letter === game[keys[i]].key){
			
			currentObject = game[keys[i]];
		}
	}
	
	//reset lvl count if starting
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
	if(currentObject.key == "end"){/////////added lvlCount != 0!!!!
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
		//custom story update
		var endString = "Levels Survived: " + getlvlCount() + "<br><br>" + loseString;
		document.body.querySelector("#storyText").innerHTML = endString;
		lvlCount = 0;
		updateScore();
		return;
	}
	//Haven't lost if you got here
	updateScore();
	//increment level count
	if(currentObject.key != "start")
	lvlCount++;

	//Update end text link
	showEndText(currentObject);

	for(var i = 0; i < inputs.length; i++){
		inputs[i].parentNode.style.visibility = "visible";
		//uncheck all buttons
		inputs[i].checked = false;
		inputs[i].label.innerHTML = currentObject.options[i].txt;// + " -> " + currentObject.options[i].link ;
		inputs[i].value = currentObject.options[i].link;
		//options[i].childNode.innerHTML = "weeo";
	}

	
}
