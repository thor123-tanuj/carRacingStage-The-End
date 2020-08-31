class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",function(data){
      allPlayers = data.val();
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name : this.name,
      distance : this.distance,
      rank : this.rank
    });
  }

  getCarsAtEnd() {
    database.ref('carsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })

  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      carsAtEnd : rank
    })
  }

  
}
