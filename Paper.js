class Paper {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,  
        restitution:0.3,
        friction:7,
        density:0.5
          
      }
      this.image=loadImage("paper.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      stroke("green");
      strokeWeight(4);
      fill("255");
      //rect(0,0, this.width, this.height);
      imageMode(CENTER);
			image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  