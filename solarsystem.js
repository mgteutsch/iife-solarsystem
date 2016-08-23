// 1. Create public property for holding the last modified date.
// 2. Write getter/setter for planets.
// 3. Write getter/setter for activeSpacecraft.
// 4. Write getter/setter for planetsLandedOn.


var SolarSystem = (function() {
	var planets = ["mercury"];
	var activeSpacecraft = ["Voyager I"];
	var planetsLandedOn = 0;
	
	return {
		lastModified: new Date(),
		getPlanets : function() {
			return planets;
		},
		setPlanets: function(newPlanet) {
			planets.push(newPlanet);
		},
		getActiveSpacecraft: function() {
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(newSpacecraft) {
			activeSpacecraft.push(newSpacecraft);
		},
		getplanetsLandedOn: function() {
			return planetsLandedOn;
		},
		setplanetsLandedOn: function(numLandedOn) {
			planetsLandedOn = numLandedOn;
		}
	}
})();