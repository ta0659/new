//class SlingShot{ constructor(bodyA, pointB){var options = {bodyA: bodyA,pointB: pointB, stiffness: 0.04,length: 1
   //} this.sling = Constraint.create(options); this.pointB=pointB;World.add(world, this.sling);}attach(body){ this.sling.bodyA = body; } fly(){ this.sling.bodyA =null;}
   // display(){ if(this.sling.bodyA){var pointA = this.sling.bodyA.position;var pointB = this.pointB;strokeWeight(4); // stroke("turquoise"); line(pointA.x, pointA.y, pointB.x, pointB.y); } }}

   //class Rope{constructor(bodyA, pointB){
//var options = {bodyA: bodyA,pointB: pointB,stiffness: 1.2,length: 250}this.pointB = pointBthis.Rope = Constraint.create(options);World.add(world, this.Rope);}
    //attach(body){this.Rope.bodyA = body;}fly(){this.Rope.bodyA = null;}display(){if(this.Rope.bodyA){ var pointA=this.Rope.body.position;
    //var pointB=this.pointB;push();strokeWeight(8);stroke(48,22,8);line(pointA.x, pointA.y, pointB.x, pointB.y); pop();}}}

  
    class Chain{
        constructor(bodyA,bodyB){
           // this.offsetX=offsetX
           // this.offsetY=offsetY
            var options={
                bodyA: bodyA,
                bodyB: bodyB,
             //   pointB: {x: this.offsetX, y: this.offsetY}
                stiffness: 0.04,
                length: 500
            }
    
            this.Chain=Constraint.create(options);
            World.add(world,this.Chain);
        }
        attach(body){
            this.Chain.bodyA = body;
        }
        
        fly(){
            this.Chain.bodyA = null;
        }
        display(){
            if(this.Chain.bodyA){ var pointA=this.Chain.body.position;
                var pointB=this.pointB;
            }
            var pointA=this.Chain.bodyA.position
            var pointB=this.Chain.bodyB.position
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }