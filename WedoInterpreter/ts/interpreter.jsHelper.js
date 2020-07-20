define(["require","simulation.simulation", "exports"], function(require,SIM, exports) {

	function getBlockById(id) {
		return Blockly.getMainWorkspace().getBlockById(id);
	}

	exports.getBlockById = getBlockById;

	function setSimBreak(){
		SIM.setPause(true);
	}
	exports.setSimBreak = setSimBreak;

	function resetSim(){
		SIM.resetStepping();
	}
	exports.resetSim = resetSim;
});