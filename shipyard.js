//YOUR CODE GOES HERE

var crewNames = ["Justin","Tommy","Paul","Patricia","Dickson","Mia","Meg","Brett","Tim","Anthony","Alex"]

var trainCrew = function(crewNamesArray) {
  var crew = [];
  for (var i = 0; i < crewNamesArray.length; i++) {
    crew.push({ name: crewNamesArray[i] });
  }

  return crew;
};

var crewMembers = trainCrew(crewNames);

var countdown = function(count) {
  debugger;
  if (count === 0) {
    console.log("BLASTTT OFFFFFFFF");
  } else {
    setTimeout(function() {
      console.log(count);
      countdown(count - 1);
    }, 1000);
  }
}

var launchpad = function(ship, crewMembersArray, rocket, amtFuel) {
  console.log(ship.name + ", Initiating preflight procedures!");
  ship.loadCrew(crewMembersArray);
  console.log("Your captain today is " + ship.captain().name + "!");
  ship.mountPropulsion(rocket);
  ship.fuelShip(amtFuel);
  countdown(5);
  ship.takeoff();
};

var ship = {
  name: "Starship Enterprise",
  crew: [],
  loadCrew: function(crewMembersArray) {
    for (var i = 0; i < crewMembersArray.length; i++) {
      this.crew.push(crewMembersArray[i]);
      console.log(crewMembersArray[i].name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  },
  propulsion: null,
  mountPropulsion: function(propulsion) {
    this.propulsion = propulsion;
    console.log("The engines have been mounted!");
  },
  takeoff: function() {
    if (this.propulsion.fire()) {
      console.log("BWAAAAARGGHHHHHH");
    } else {
      console.log("Takeoff was unsuccessful. No BWAAAAARGGHHHHHH today :(");
    }
  },
  fuelShip: function(amtFuel) {
    this.propulsion.fuel += amtFuel;
    console.log("We have added " + amtFuel + " to the ship's rocket.");
  }
};


var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0){
      this.fuel--;
      console.log("Rocket had been fired!!!!!!!!!!!!duh!?" + " " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire :( ");
      return false;
    }
  }
}



launchpad(ship, crewMembers, rocket, 130000000);
