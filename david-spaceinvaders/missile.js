function Missile(x, y){
    this.x = x;
    this.y = y;

    this.show = function(){ 
        fill("white")
        rect (this.x, this.y, 5, 10);
    }

    this.move = function(dir){
        this.y += dir;
    }
}