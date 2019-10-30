class GameAchievements{
    constructor(name){
        this.name = name;
        this.points = 0;
        this.enemiesLeft = 0;
    }
    
    addPoints(points){
        this.points += points;
    }
    
    getPoints(){
        return this.points;
    }
}
