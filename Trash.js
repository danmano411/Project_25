class Trash {
    constructor(x, y){
        var options = {
            isStatic: true,
            friction: 1
        }
        this.bottombody = Bodies.rectangle(x, y, 100, 10, options)
        this.leftbody = Bodies.rectangle(x-50, y-50, 10, 100, options)
        this.rightbody = Bodies.rectangle(x+50, y-50, 10, 100, options)

        this.image = loadImage("Trash/dustbingreen.png")

        World.add(world, this.bottombody)
        World.add(world, this.rightbody)
        World.add(world, this.leftbody)

    }
    display(){
        push();
        fill("white")
        imageMode(CENTER)
        rectMode(CENTER)
        rect(this.leftbody.position.x, this.leftbody.position.y, 10, 100);
        rect(this.rightbody.position.x, this.rightbody.position.y, 10, 100);
        image(this.image, this.bottombody.position.x, this.bottombody.position.y - 50, 125, 110);
        pop();
    }
}