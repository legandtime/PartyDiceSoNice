Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "PartyDice", name: "Party Dice"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_d2.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_d4.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_d6.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_d8.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_d10.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_d100.glb",
		system: "PartyDice"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_d12.glb",
		system: "PartyDice"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/PartyDice/PartyDice_20.glb",
		system: "PartyDice"
	});
});
