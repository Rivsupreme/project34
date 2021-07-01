//Create variables here
var dog ,dogImage1,dogImage2,database,food,foodstock

function preload()
{
	//load images here
  dogImage1=loadImage("images/dogImg.png")
  dogImage2=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(800, 700);
  
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImage1)
  dog.scale=0.15
  
  foodstock=database.ref('Food')
  foodstock.on("value",readStock)
   textSize(20)
}


function draw() {  
  background("green")
if (keyWentDown(UP_ARROW)){
writeStock(food)
dog.addImage(dogImage2)
}
  drawSprites();
  //add styles here
fill("red")
textSize(30)
text("foodremaining : "+food,170,200)
text("note:press up arrow key to feed milk ",130,10,300,200)


}


function readStock(data){
  food=data.val()

}
function writeStock (x){
  if (x<=0){
    x=0
  }
  else{x=x-1}
  database.ref('/').update({
    Food:x
  })
}