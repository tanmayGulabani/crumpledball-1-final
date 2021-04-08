class Dustbin{
    constructor(x,y,width,height){
    var options= {
        friction:5,
        density:1,
        isStatic:true
    }
    //this.body = Bodies.rectangle(x,y,width,height,options);
    this.leftbody=Bodies.rectangle(970,550,20,100,options);
    this.rightbody=Bodies.rectangle(1180,550,20,100,options);
    this.basebody=Bodies.rectangle(1080,590,200,20,options);

    this.width = width;
    this.height = height;
    World.add(world,this.leftbody);
    World.add(world,this.basebody);
    World.add(world,this.rightbody);
    }
    display(){
        fill("red");
        rect(this.leftbody.position.x,this.leftbody.position.y,20,100);
        rect(this.basebody.position.x,this.basebody.position.y,200,20);
        rect(this.rightbody.position.x,this.rightbody.position.y,20,100);
    }
}