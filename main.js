console.log("This is the main.js file.");

console.log("SolarSystem: ", SolarSystem);
console.log("Get Planets: ", SolarSystem.getPlanets());
console.log("Get Spacecraft: ", SolarSystem.getActiveSpacecraft());
console.log("Get # Landed On: ", SolarSystem.getplanetsLandedOn());

// Now, from the Augmented file:

console.log("Get Closest Stars: ", SolarSystem.getClosestStars());
console.log("Get Age of SolarSystem: ", SolarSystem.getAgeOfSolarSystem());
console.log("Get Dwarf Planets: ", SolarSystem.getDwarfPlanets());

SolarSystem.setAgeOfSolarSystem(10000000);
console.log("New Age of Solar System: ", SolarSystem.getAgeOfSolarSystem());