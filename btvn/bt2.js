const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35,
};
const performancePerMatch = (player.goals + player.assists) / player.matchesPlayed;


const  addPerformanceScore ={
    "name" : player.name,
    "position" : player.position,
    "goals" : player.goals,
    "assists" : player.goals,
    "matchesPlayed" : player.matchesPlayed,
    "performancePerMatch" : performancePerMatch, 
    "isKeyPlayer": "false",
};




if(performancePerMatch >= 1 ){
    console.log(`isKeyPlayer: true`);
}else{
      console.log(`isKeyPlayer: false`);
}
console.log(addPerformanceScore);