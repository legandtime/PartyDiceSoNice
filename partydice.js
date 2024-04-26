Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "PartyDice", name: "Party Dice"}, false);
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/Party Dice/PartyDice_d6.glb",
		system: "PartyDice"
	});
});
