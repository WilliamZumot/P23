class Box{
    constructor(x, y, w, h){
        var options = {
            'friction': 10,
            'isStatic': true
        }

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;

    World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
       fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }

}
