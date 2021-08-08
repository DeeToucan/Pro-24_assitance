class PAPER {
    constructor(x,y){

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.r = 15;
        this.body = Bodies.circle(x, y, this.r*2, options);
        World.add(world, this.body);


        this.display = function(){
            var pos = this.body.position;
            var angle = this.body.angle;

            //console.log(pos.x);
            //console.log(pos.y);

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,this.r);
            fill(255,255,255);
            noStroke();
            pop();
        }
    }
}