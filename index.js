function findMatching(drivers, names) {
    return drivers.filter((name) => 
    name.toLowerCase().includes(names.toLowerCase()));
};

function fuzzyMatch(drivers, letters) {
    return drivers.filter((letter) =>
        letter === letters)
    };
    
function matchName(drivers, driverNames) {
    return drivers.filter((driverName) =>
    drivers.name === driverNames);        
};