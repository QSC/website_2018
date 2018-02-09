var lvlCount = 0, topScore = 0;
var loseString = '';
//Game Object
var game = [
 	//Level 0
	{
		key: "start",
		title: "In the Beginning",
		header: "Crash Landing!!",
		story: "Your ship has crashed, and you find yourself stranded! Desert surrounds you in all directions",
		img: "img/desert.gif",
		options: [{txt:"Head to the Mountains", link: 'a1'},
				  {txt:"Head to the Ocean", link: 'b1'},
				  {txt:"Head to the Caves", link: 'end'}],
		endText: "You trip and fall on the way to the caves.  You die instantly... the next day :("

	},
	//Lose
	{
		key: "end",
		title: "You Lose!",
		header: "Uh Oh :(",
		story: ("You survived " + getlvlCount() + " levels" + "\n" + loseString),
		img: "img/explosion.gif",
		options: [{txt:"Restart", link: 'start'}]

	},
	//Win
	{
		key: "win",
		title: "Victory!",
		header: "Space Conference Champions!",
		story: "Winner winner chicken dinner!  You're teleported back down to Earth, Queen's Space Conference awaits.",
		img: "img/win.gif",
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
		story: "You found some strange looking leaves which you eat.  You feel very happy... too happy.  You see firewood nearby and footprints in the ground.",
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
		img: "img/fire.gif",
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
		img: "img/tech.gif",
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
		img: "img/fire.gif",
		options: [{txt:"Ask, 'How are the kids?'", link: 'end'},
				  {txt:"Ask, 'You're not an alien are you?'", link: 'end'},
				  {txt:"Take no chances, attack Bob", link: 'a4'}],
		endText: "Your question triggers something horrible.  An alien tears through Bob and attacks.  You die instantly... the next day."
	},
	{//Mysterious Tech
		key: "d3",
		title: "QCBT",
		header: "You check out the tech",
		story: "The technology is very strange.  As soon as your skin makes contact, it begins to glow and hum loudly.  It leaves your hands and hovers in front of you, then it slowly moves away.",
		img: "img/tech.gif",
		options: [{txt:"Follow the object", link: 'b4'},
				  {txt:"It could be a scout!  Attack!!", link: 'c4'},
				  {txt:"Attempt to grab it once more", link: 'end'}],
		endText: "The object hums louder and louder until it levels at a screeching frequency.  It glows red hot and then explodes."
	},
	//Level 4
	{//Attack Bob
		key: "a4",
		title: "Kung Fu Kenny Now",
		header: "Round 1: Fight!",
		story: "Bob lunges towards you with a screech and a few too many arms.",
		img: "img/alien.gif",
		options: [{txt:"Play dead", link: 'a5'},
					{txt:"Run!", link: 'a5'},
				  {txt:"kung fu panda style", link: 'end'}],
		endText: "Bob wraps his many STRONG arms around you. Your life slowly drains from your body as he crushes you in a deadly bear hug."
	},
	{//Attack Bob
		key: "b4",
		title: "Alien Technology",
		header: "You follow the floating object",
		story: "The strange tech floats into the misty forest ahead.  You hear what sounds like screams of help in the distance, it could be your crew?",
		img: "img/scary_forest.gif",
		options: [{txt:"Take chill pills ", link: 'b5'},
					{txt:"Follow the sounds", link: 'c3'},
				  {txt:"Follow the floating object", link: 'a6'}],
		endText: "Oh No. You die"
	},
	//Alien HQ
	{
		key: "a5",
		title: "Get Out",
		header: "Escape Artist",
		story: "Surprisingly that worked, no Bob in sight.  Night has fallen and you can barely see, but you can make out a dim glow in the distance.",
		img: "img/scary_forest.gif",
		options: [{txt:"Follow the light", link: 'a6'},
					{txt:"Scream until Bob comes back.", link: 'end'},
				  {txt:"Make a fire", link: 'a2'}],
		endText: "Cmon guys.. you die. obviously"
	},
	{
		key: "a6",
		title: "Walking down the path",
		header: "Walking",
		story: "Just as the sun begins to rise, you reach a very alien, metallic structure.  The light glows overhead,  a password prompt appears: enter password",
		img: "img/alien_base.gif",
		options: [{txt:"enter: zeepblorg", link: 'end'},
					{txt:"enter: password", link: 'end'},
				  {txt:"enter: caves123", link: 'a7'}],
		endText: "The entire facility explodes.  Such a tragic ending to your epic story."
	},
	{
		key: "a7",
		title: "Alienation Nation",
		header: "Alien Base",
		story: "The password worked!  A door slides open and you enter the structure.  You can see figures inside, but they haven't noticed you yet!",
		img: "img/alien_base.gif",
		options: [{txt:"Say hello", link: 'end'},
					{txt:"Sneak closer", link: 'a8'},
				  {txt:"Hastily crab walk forward", link: 'a8'}],
		endText: "The figures turn and attack.  Quietly next time.."
	},
	{
		key: "a8",
		title: "Sneak lvl 10000",
		header: "Friends or nah?",
		story: "You sneak up unnoticed, the figures are most DEFINITELY aliens, in the center of the circle is your crew mate Johnny.",
		img: "img/alien_base.gif",
		options: [{txt:"Attack the aliens", link: 'end'},
					{txt:"Distraction!  Throw a pebble", link: 'end'},
				  {txt:"psssst Johnny", link: 'a9'}],
		endText: "The aliens turn and attack, you try to run but trip and lose this sweet sweet game."
	},
	{
		key: "a9",
		title: "Friends!",
		header: "Aliens = Bad",
		story: "Johnny turns and looks at you!  He signals that the other crew mates are nearby - the aliens didn't hear you!  You see another door, stairs, and what looks like a glowing wall.",
		img: "img/alien_base.gif",
		options: [{txt:"~~ jump through the wall ~~", link: 'b5'},
					{txt:"go through the door", link: 'end'},
				  {txt:"Stairs it is", link: 'a10'}],
		endText: "The door creaks loudly and the aliens turn their 'heads'.  Bad. News. Bears."
	},
	{
		key: "a10",
		title: "My Clique!",
		header: "Uh Oh.",
		story: "You walk up the stairs.  At the top you find an alien guard, your crew is tied up right behind it.",
		img: "img/alien.gif",
		options: [{txt:"Attack the alien", link: 'end'},
					{txt:"'caves123?'", link: 'end'},
				  {txt:"Challenge to dance off", link: 'a11'}],
		endText: "The alien destroys you.."
	},
	{
		key: "a11",
		title: "Dance Master",
		header: "Coolest Alien",
		story: "You whip out some moves from outer space.  The alien high fives you and lets you pass!  You rescue the rest of your crew!  Where to now.",
		img: "img/alien.gif",
		options: [{txt:"Through that glowing wall!", link: 'b5'},
					{txt:"Take a chill pill", link: 'b5'},
				  {txt:"Attempt to build a spaceship", link: 'end'}],
		endText: "You can't quite figure out how to even begin.  hmmm you starve to death AND explode"
	},
	//Gwarble Trivia
	{
		key: "b5",
		title: "Gwarble Trivia",
		header: "Space AND team work <3",
		story: "You feel incredibly chill.  You seem to have been transported into some sort of galactic trivia game show. Gwarble Trivia!!! SPACE FACTS in 3.. 2.. 1",
		img: "img/trivia.gif",
		options: [{txt:"Wave to the crowd", link: 'b6'},
					{txt:"Call a friend", link: 'b6'},
				  {txt:"Press the big red button", link: 'b6'}],
		endText: "Trivia-splosions"
	},
	{
		key: "b6",
		title: "Gwarble Trivia",
		header: "NASA",
		story: "Which President of the United States established NASA?",
		img: "img/trivia.gif",
		options: [{txt:"Dwight D. Eisenhower", link: 'b7'},
					{txt:"Harry Truman", link: 'end'},
				  {txt:"John F. Kennedy", link: 'end'}],
		endText: "The ground opens up from underneath you and you fall into the monster pit ahhhhhhhh!!!"
	},
	{
		key: "b7",
		title: "Gwarble Trivia",
		header: "Atmosphere",
		story: "What are the two main gases that make up 99% of the Earth's atmosphere?",
		img: "img/trivia.gif",
		options: [{txt:"Nitrogen and Hydrogen", link: 'end'},
					{txt:"Oxygen and Carbon", link: 'end'},
				  {txt:"Nitrogen and Oxygen", link: 'b8'}],
		endText: "The ground opens up from underneath you and you fall into the monster pit ahhhhhhhh!!!"
	},
	{
		key: "b8",
		title: "Gwarble Trivia",
		header: "Mars",
		story: "Mars makes a complete orbit around the sun in how many Earth days?",
		img: "img/trivia.gif",
		options: [{txt:"687 Earth Days", link: 'b9'},
					{txt:"259 Earth Days", link: 'end'},
				  {txt:"974 Earth Days", link: 'end'}],
		endText: "The ground opens up from underneath you and you fall into the monster pit ahhhhhhhh!!!"
	},
	{
		key: "b9",
		title: "Gwarble Trivia",
		header: "Planets",
		story: "What is the name for the four planets closest to Earth's sun (Mercury, Venus, Earth, and Mars)?",
		img: "img/trivia.gif",
		options: [{txt:"Solar Planets", link: 'end'},
					{txt:"Terrestrial Planets", link: 'b10'},
				  {txt:"Primary Planets", link: 'end'}],
		endText: "The ground opens up from underneath you and you fall into the monster pit ahhhhhhhh!!!"
	},
	{
		key: "b10",
		title: "Gwarble Trivia",
		header: "Pluto",
		story: "Once considered the 9th planet, Pluto is now considered a(n) ______?",
		img: "img/trivia.gif",
		options: [{txt:"Dwarf Planet", link: 'b11'},
					{txt:"Asteroid", link: 'end'},
				  {txt:"Pseudo Planet", link: 'end'}],
		endText: "The ground opens up from underneath you and you fall into the monster pit ahhhhhhhh!!!"
	},
	{
		key: "b10",
		title: "Gwarble Trivia",
		header: "Moons",
		story: "Titan, Enceladus, Mimas & Iapetus are just some of the moons orbiting which planet?",
		img: "img/trivia.gif",
		options: [{txt:"Jupiter", link: 'end'},
					{txt:"Saturn", link: 'win'},
				  {txt:"Uranus", link: 'end'}],
		endText: "The ground opens up from underneath you and you fall into the monster pit ahhhhhhhh!!!"
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
	if(currentObject.key == "end" || currentObject.key == "win"){/////////added lvlCount != 0!!!!
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
		if(currentObject.key != "win"){
		document.body.querySelector("#storyText").innerHTML = endString;
	  }
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
