class Ingredient{
	constructor(effect1, effect2, effect3, effect4){
		this.effect1 = effect1;
		this.effect2 = effect2;
		this.effect3 = effect3;
		this.effect4 = effect4;
	}
	x(y)
	{
		switch(y)
		{
			case this.effect1:
			alert("You created a " + this.effect1 + " potion!");
			break;
			case this.effect2:
			alert("You created a " + this.effect2 + " potion!");
			break;
			case this.effect3:
			alert("You created a " + this.effect3 + " potion!");
			break;
			case this.effect4:
			alert("You created a " + this.effect4 + " potion!");
			break;
		}
	}
	mix(secondAgent)
	{
		this.x(secondAgent.effect1);
		this.x(secondAgent.effect2);
		this.x(secondAgent.effect3);
		this.x(secondAgent.effect4);
	}



}

const wheat = new Ingredient("restore health", "invisibility", "resist fire", "resist frost")
const torchbug_thorax = new Ingredient("damage health", "resist magic", "resist shock", "restore fatigue")
const frost_mirmain = new Ingredient("resist frost", "restore fatigue", "restore magicka", "resist fire")
const lavender = new Ingredient("fortify conjuration", "restore health", "restore fatigue", "restore magicka")
const dwemer_oil = new Ingredient("fortify one-handed", "damage health", "damage fatigue", "restore magicka")


wheat.mix(lavender);