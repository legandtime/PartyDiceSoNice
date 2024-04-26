Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "PartyDice", name: "Party Dice"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
});
