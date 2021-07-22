var good , goodimg,bad,badImg
var bg
var gameState = "yay"
var score
function preload(){
goodimg = loadImage("g.png")
badImg = loadImage("b.png")

}

function setup() {
 createCanvas(400,400)
 good = createSprite(200,200,20,20)
 good.addImage("helo",goodimg)
 good.scale = 0.2
 createCanvas(400,400)
 bad = createSprite(random(30,370),440,20,20)
 bad.addImage("belo",badImg)
 bad.scale = 0.1
 bad.velocityY = -3
 bg = createGroup()
 bg.add(bad)
}

function draw() {
    background(52)
    if(gameState = "yay"){
        score+=1
        text(score,20,20)
        if(frameCount % 60 === 0)
        bad = createSprite(random(30,370),440,20,20)
        bad.addImage("belo",badImg)
        bad.scale = 0.1
        bad.velocityY = -3
      bg.add(bad)
if(good.isTouching(bg)){
    good.destroy()
    gameState = "nay"
   


}
good.x = mouseX
    }
console.log(gameState)
 drawSprites()
}
