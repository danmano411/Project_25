class Ball {
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution: 0.3,
            density: 1.2
        } 
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 50;
        this.image = loadImage("Trash/paper.png");

        World.add(world, this.body)
    }

    display() {
        push();
        imageMode(CENTER)
        //ellipseMode(RADIUS)
        //ellipse(this.body.position.x, this.body.position.y, this.radius)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop()
    }
}
                                                                                                                      