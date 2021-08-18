var ast,astImg;
var bgImg;
var flag,flagImg;
var oxy,oxyImg;
var fuel,fuelImg;
var radio,radioImg;
var confetti,confettiImg;
var star,starImg,star1,starImg1;




function preload(){
    astImg = loadImage("astraunuat1.png");
    bgImg = loadImage("background.jpg");
    oxyImg = loadImage("oxygen.png");
    flagImg = loadImage("flag.png");
    fuelImg = loadImage("fuel.png");
    radioImg = loadImage("radio.png");
    starImg1 = loadImage("star2.png");
    

}


function setup(){
    createCanvas(displayWidth,displayHeight);

    star1 = createSprite(width/2,50);
    star1.addImage(starImg1)
    star1.scale = 0.08;
    star1.visible = false
    star2 = createSprite(width/2+100,50);
    star2.addImage(starImg1)
    star2.scale = 0.08;
    star2.visible = false
    star3 = createSprite(width/2+200,50);
    star3.addImage(starImg1)
    star3.scale = 0.08;
    star3.visible = false
    star4 = createSprite(width/2+300,50);
    star4.addImage(starImg1)
    star4.scale = 0.08;
    star4.visible = false


    ast = createSprite(displayWidth/2+50,displayHeight/2+100);
    ast.addImage(astImg);
    ast.scale = 0.4;

    oxy = createSprite(420,355);
    oxy.addImage(oxyImg);
    oxy.scale = 0.2;

    flag = createSprite(760,400);
    flag.addImage(flagImg);
    flag.scale = 0.1;

    fuel = createSprite(70,45);
    fuel.addImage(fuelImg);
    fuel.scale = 0.1;

    radio = createSprite(1510,550);
    radio.addImage(radioImg);
    radio.scale = 0.1;


}


function draw(){
    background(bgImg);


    if(mousePressedOver(oxy)) {
        console.log("oxyisclicked");
        oxy.scale = 1;
        oxy.x = width/2
        oxy.y = height/2+150
        
        oxy.depth =8
        setTimeout(() => { oxy.destroy() ;starImg.remove(); star1.visible = true;}, 2000);
        
        starImg = createImg("star.gif");
        starImg.position(width/2-200,10);
        starImg.size(400,400)
       
      
      }

      if(mousePressedOver(flag)) {
        console.log("flagisclicked");
        flag.scale = 0.09;
        flag.x = width/2
        flag.y = height/2+150
        
        flag.depth =8
        setTimeout(() => { flag.destroy() ;starImg.remove(); star2.visible = true;}, 2000);
        
        starImg = createImg("star.gif");
        starImg.position(width/2-200,10);
        starImg.size(400,400)
       
      }

      if(mousePressedOver(fuel)) {
        console.log("fuelisclicked");
        fuel.scale = 1;
        fuel.x = width/2
        fuel.y = height/2+150
        
        fuel.depth =8
        setTimeout(() => { fuel.destroy() ;starImg.remove(); star3.visible = true;}, 2000);
        
        starImg = createImg("star.gif");
        starImg.position(width/2-200,10);
        starImg.size(400,400)
       
      }

      if(mousePressedOver(radio)) {
        console.log("radioisclicked");
        radio.scale = 1;
        radio.x = width/2
        radio.y = height/2+150
        
        radio.depth =8
        setTimeout(() => { radio.destroy() ;starImg.remove(); star4.visible = true;}, 2000);
        
        starImg = createImg("star.gif");
        starImg.position(width/2-200,10);
        starImg.size(400,400)
       
      }




 drawSprites();
}