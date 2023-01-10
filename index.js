function findMatching(drivers, names) {
    return drivers.filter((name) => 
    name.toLowerCase().includes(names.toLowerCase()));
};

function fuzzyMatch(drivers, letters) {
    return drivers.filter((letter) =>
        letter[0].toLowerCase().includes(letters[0].toLowerCase()));
    };
    
function matchName(drivers, soughtName) {
    return drivers.filter(driver => 
        driver.name === soughtName);      
};