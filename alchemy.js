function pickIng(letter)
{


console.log("pickIng firing");
//this line may make your brain hurt.  But it means, for instance,
//the nameA field will be filled.  The program then fetches an item from 
//the array of objects called ingArray because the value of each item in 
//the drop down corresponds with the index in the array of objects.
//then once its got its the proper object, it looks for its name property

$("#name" + letter).text(ingArray[$("#ing" + letter).val()].name);

$("#effect1" + letter).text(ingArray[$("#ing" + letter).val()].effect1);
$("#effect2" + letter).text(ingArray[$("#ing" + letter).val()].effect2);
$("#effect3" + letter).text(ingArray[$("#ing" + letter).val()].effect3);
$("#effect4" + letter).text(ingArray[$("#ing" + letter).val()].effect4);
}


class Ingredient{
	
	//assign effects to item
	constructor(name, effect1, effect2, effect3, effect4){
		this.effectsArray = [];
		this.created = false;
		this.name = name;
		this.effect1 = effect1;
		this.effect2 = effect2;
		this.effect3 = effect3;
		this.effect4 = effect4;
	}
	 //this may be easier understood with the second method read first

     //checks each of the effects of the second agent, to see if it matches
     //an effect in the first agent. 
	effectMatcher(otherAgentEffect)
	{
		switch(otherAgentEffect)
		{
			case this.effect1:
			alert("You created a " + this.effect1 + " potion!");
			this.created = true;
			this.effectsArray.push(this.effect1);
			break;
			case this.effect2:
			alert("You created a " + this.effect2 + " potion!");
			this.created = true;
			this.effectsArray.push(this.effect2);
			break;
			case this.effect3:
			alert("You created a " + this.effect3 + " potion!");
			this.created = true;
			this.effectsArray.push(this.effect3);
			break;
			case this.effect4:
			alert("You created a " + this.effect4 + " potion!");
			this.created = true;
			this.effectsArray.push(this.effect4);
			break;
		}
		
		
	}
	//takes a second Ingridient, checks each of its "effect" properties, runs them
	//through the 'x' method.
	mix(secondAgent)
	{
		if(this.name == secondAgent.name)
		{
			alert("Can't mix two of the same ingredients")
		}
		else
		{	
		this.effectMatcher(secondAgent.effect1);
		this.effectMatcher(secondAgent.effect2);
		this.effectMatcher(secondAgent.effect3);
		this.effectMatcher(secondAgent.effect4);
			if(this.created == true)
			{
				//why does this create four images?  Each effect that checks creates
				//a new image node.  That makes no sense

				//also note that oddly only inline styling works
				$("#inventory").append("<img title = '" + this.effectsArray + "' style = 'width: 100px; margin: 10px;' src = 'https://w7.pngwing.com/pngs/820/447/png-transparent-the-elder-scrolls-v-skyrim-potion-minecraft-invisibility-elixir-minecraft-dragon-wine-bottle-magic.png' />")
			}
			else
			{
				alert("Potion creation failed");
			}
	    }
	}



}



const wheat = new Ingredient("wheat", "restore health", "invisibility", "resist fire", "resist frost")
const torchbug_thorax = new Ingredient("torchbug thorax", "damage health", "resist magic", "resist shock", "restore fatigue")
const frost_mirmain = new Ingredient("frost mirmain", "resist frost", "restore fatigue", "restore magicka", "resist fire")
const lavender = new Ingredient("lavender", "fortify conjuration", "restore health", "restore fatigue", "restore magicka")
const dwemer_oil = new Ingredient("dwemer oil", "fortify one-handed", "damage health", "damage fatigue", "restore magicka")

let ingArray = [wheat, torchbug_thorax, frost_mirmain, lavender, dwemer_oil];


for (let i = 0; i < ingArray.length; i++) {
	console.log("for loop firing");
    console.log(ingArray[i]);
   
  $("#ingA").append("<option value = '" + i + "'>" + ingArray[i].name + "</option>")
  $("#ingB").append("<option value = '" + i + "'>" + ingArray[i].name + "</option>")
}



function mix()
{
if(document.getElementById("ingA").value == "empty" || document.getElementById("ingB").value == "empty")
{
alert("Must mix two ingredients!")
}
else
{
ingArray[parseInt(document.getElementById("ingA").value)].mix(ingArray[parseInt(document.getElementById("ingB").value)])
}
}