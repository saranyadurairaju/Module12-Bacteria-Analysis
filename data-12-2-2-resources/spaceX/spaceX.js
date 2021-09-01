const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(spaceXResults => console.log(spaceXResults));

console.log(spaceXResults);

// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// console.log(spaceXResults);
// d3.json(url).then(spaceXResults.map(x=> console.log(x.location.latitude)));


d3.json(url).then(spaceXResults => spaceXResults.map(x => console.log(x.location.latitude)));

d3.json(url).then(spaceXResults => spaceXResults.map(x => console.log(x.location.latitude , x.location.longitude)));

// d3.json(url).then(spaceXResults => spaceXResults.map(x => console.log(`${x.location.latitude} , ${x.location.longitude}`)));

// var latlog = d3.json(url).then(spaceXResults => spaceXResults.map(x => console.log(`${x.location.latitude} , ${x.location.longitude}`)));
// console.log(latlog);
