// 1. Create getter/setter for closest stars to the sun
// 2. Create getter/setter for age of the solar system
// 3. Create getter/setter for known dwarf planets

var SolarSystem = (function(newSolarSystem) {
	var closestStars = ["Alpha Centauri"];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = ["Pluto"];

	newSolarSystem.getClosestStars = function() {
		return closestStars;
	};
	newSolarSystem.setClosestStars = function(stars) {
		closestStars.push(stars);
	};

	newSolarSystem.getAgeOfSolarSystem = function() {
		return ageOfSolarSystem;
	};
	newSolarSystem.setAgeOfSolarSystem = function(age) {
		ageOfSolarSystem = age;
	};

	newSolarSystem.getDwarfPlanets = function() {
		return dwarfPlanets;
	};
	newSolarSystem.setDwarfPlanets = function(dwarfs) {
		closestStars.push(dwarfs);
	};

	return newSolarSystem;

})(SolarSystem || {});