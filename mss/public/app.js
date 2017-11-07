$(document).ready(()=>{

var displayStatus;
displayStatus = document.getElementById("status");
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.addEventListener("fileload",playSound);
createjs.Sound.registerSound("assets/Theme.mp3","sound");
createjs.Sound.registerSound("assets/click.wav","a");
createjs.Sound.registerSound("assets/click1.wav","b");
createjs.Sound.registerSound("assets/click3.wav","c");

var turtle = new createjs.Bitmap("assets/tutorial.png");
//var skip = new createjs.Bitmap("assets/skip.png");

var touch = new createjs.Text("請 點 擊 任 意 一 處 繼 續","20px Arial", "#ffffff");
touch.x = 600;
touch.y = 750;

turtle.scaleY = 1 ; 
turtle.scaleX = 1 ; 

var again = new createjs.Bitmap("assets/again.png");
var finish1 = new createjs.Bitmap("assets/thaiend.png");
var per0 = new createjs.Bitmap("assets/ProgressBar0.png");
var per20 = new createjs.Bitmap("assets/ProgressBar1.png");
var per40 = new createjs.Bitmap("assets/ProgressBar2.png");
var per60 = new createjs.Bitmap("assets/ProgressBar3.png");
var per80 = new createjs.Bitmap("assets/ProgressBar4.png");
var per100 = new createjs.Bitmap("assets/ProgressBar5-1.png");


per20.scaleX = per20.scaleY = 0.4;
per20.x = 1100;
per20.y = 575;
per40.scaleX = per40.scaleY = 0.4;
per40.x = 1100;
per40.y = 575;
per60.scaleX = per60.scaleY = 0.4;
per60.x = 1100;
per60.y = 575;
per80.scaleX = per80.scaleY = 0.4;
per80.x = 1100;
per80.y = 575;

var bar = new createjs.Shape();
var num = 0 ; 
var headd = 0;
var handd = 0;
var backk = 0;
var legg = 0 ;
var downn = 0 ;



let repo = new createjs.LoadQueue;


var stage = new createjs.Stage("gameView");
var stage2 = new createjs.Stage("gameView");


//intro
var txt = new createjs.Bitmap("assets/thaiintro.png");
var rect = new createjs.Shape();
var bitmap = new createjs.Bitmap("assets/skip.png");
var txtbg = new createjs.Bitmap("assets/thai.png");


//init

var bg1 = new createjs.Bitmap("assets/open.png");

var play = new createjs.Bitmap("assets/start.png");


//method
var push = new createjs.Bitmap("assets/push.png");
var knea = new createjs.Bitmap("assets/knea.png");
var shaitsu = new createjs.Bitmap("assets/shaitsu.png");
var stretch = new createjs.Bitmap("assets/stretch.png");
var stretch1 = new createjs.Bitmap("assets/stretch.png");
var stretch2 = new createjs.Bitmap("assets/stretch.png");

var tab = new createjs.Bitmap("assets/tab.png");


//GameView
var Gbg = new createjs.Bitmap("assets/thaiBack.png");
var person = new createjs.Bitmap("assets/person.png");


 var image = new createjs.Bitmap("assets/image.png");
 var image1 = new createjs.Bitmap("assets/image1.png");
 var image2 = new createjs.Bitmap("assets/image2.png");
 var image3 = new createjs.Bitmap("assets/image3.png");

 image3.scaleX = image3.scaleY = 0.7;
 image3.y = 100;
 image3.x = 500;
 image3.alpha = 0;person
 image2.scaleX = image2.scaleY = 0.7;
 image2.y = 100;
 image2.x = 545;
 image2.alpha = 0;
 image1.scaleX = image1.scaleY = 0.7;
 image1.y = 100;
 image1.x = 615;
 image1.alpha = 0;
 image.scaleX = image.scaleY = 0.7;
 image.y = 100;
 image.x = 600;
 image.alpha = 0;

var head = new createjs.Shape();

var head1 = new createjs.Shape();

var hand = new createjs.Shape();
var hand1 = new createjs.Shape();
var hand2 = new createjs.Shape();
var hand3 = new createjs.Shape();


var back = new createjs.Shape();
var back1 = new createjs.Shape();

var leg = new createjs.Shape();
var leg1 = new createjs.Shape();

var leg2 = new createjs.Shape();
var leg3 = new createjs.Shape();

var down = new createjs.Shape();
var down1 = new createjs.Shape();

var down2 = new createjs.Shape();
var down3 = new createjs.Shape();

	Gbg.scaleX = 0.75;
	Gbg.scaleY = 0.77;

    head.graphics.beginFill("orange").drawCircle(222.5,710,10);

    hand.graphics.beginFill("orange").drawCircle(357,665,10);
    hand1.graphics.beginFill("orange").drawCircle(357,755,10);
    
    back.graphics.beginFill("orange").drawCircle(310,710.5,10);

    leg.graphics.beginFill("orange").drawCircle(410,693,10);

    leg1.graphics.beginFill("orange").drawCircle(410,728,10);

    down.graphics.beginFill("orange").drawCircle(460,693,10);

    down1.graphics.beginFill("orange").drawCircle(460,728,10);



var hej = false;
var haj = false;
var bkj = false;
var lgj = false;
var dnj = false;
   



var method = new createjs.Container();

var txtview = new createjs.Container();

var index = new createjs.Container();

var position = new createjs.Container();

var motion = new createjs.Container();

/////animation///////

var op = new createjs.SpriteSheet({
    "images":["assets/opening1.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var opp = new createjs.Sprite(op,"move");
   opp.x=375;
   opp.y=0;
   opp.scaleX = opp.scaleY = 0.6;


var b1 = new createjs.SpriteSheet({
    "images":["assets/back1.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var bb1 = new createjs.Sprite(b1,"move");
   bb1.x=375;
   bb1.y=0;
   bb1.scaleX = bb1.scaleY = 0.6;

var b2 = new createjs.SpriteSheet({
    "images":["assets/back2.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });
var bb2 = new createjs.Sprite(b2,"move");
    bb2.x = 375;
    bb2.y = 0;
    bb2.scaleX = bb2.scaleY = 0.6;


var b3 = new createjs.SpriteSheet({
    "images":["assets/back3.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });
var bb3 = new createjs.Sprite(b3,"move");
    bb3.x=375;
    bb3.y=0;
    bb3.scaleX = bb3.scaleY = 0.6;


var he1 = new createjs.SpriteSheet({
    "images":["assets/head1.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var hhe1 = new createjs.Sprite(he1,"move");
    hhe1.x=375;
    hhe1.y=0;
    hhe1.scaleX = hhe1.scaleY = 0.6;

var he2 = new createjs.SpriteSheet({
    "images":["assets/head2.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var hhe2 = new createjs.Sprite(he2,"move");
    hhe2.x=375;
    hhe2.y=0;
    hhe2.scaleX = hhe2.scaleY = 0.6;


var ha1 = new createjs.SpriteSheet({
    "images":["assets/hand1.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var hha1 = new createjs.Sprite(ha1,"move");
    hha1.x=375;
    hha1.y=0;
    hha1.scaleX = hha1.scaleY = 0.6;

var ha2 = new createjs.SpriteSheet({
    "images":["assets/hand2.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var hha2 = new createjs.Sprite(ha2,"move");
    hha2.x=375;
    hha2.y=0;
    hha2.scaleX = hha2.scaleY = 0.6;

var l1 = new createjs.SpriteSheet({
    "images":["assets/leg1.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var ll1 = new createjs.Sprite(l1,"move");
    ll1.x=375;
    ll1.y=0;
    ll1.scaleX = ll1.scaleY = 0.6;

var l2 = new createjs.SpriteSheet({
    "images":["assets/leg2.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var ll2 = new createjs.Sprite(l2,"move");
    ll2.x=375;
    ll2.y=0;
    ll2.scaleX = ll2.scaleY = 0.6;

var l3 = new createjs.SpriteSheet({
    "images":["assets/leg3.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var ll3 = new createjs.Sprite(l3,"move");
    ll3.x=375;
    ll3.y=0;
    ll3.scaleX = ll3.scaleY = 0.6;

var f1 = new createjs.SpriteSheet({
    "images":["assets/foot1.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var ff1 = new createjs.Sprite(f1,"move");
    ff1.x=375;
    ff1.y=0;
    ff1.scaleX = ff1.scaleY = 0.6;

var f2 = new createjs.SpriteSheet({
    "images":["assets/foot2.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var ff2 = new createjs.Sprite(f2,"move");
    ff2.x=375;
    ff2.y=0;
    ff2.scaleX = ff2.scaleY = 0.6;

var f3 = new createjs.SpriteSheet({
    "images":["assets/foot3.png"],
    "frames":{
            "height":851,
            "width":1134,
            "count":14},
    "animations":{
            "move":[0,13]

          }

    });

var ff3 = new createjs.Sprite(f3,"move");
    ff3.x=375;
    ff3.y=0;
    ff3.scaleX = ff3.scaleY = 0.6;

var fin = new createjs.SpriteSheet({
    "images":["assets/finish.png"],
    "frames":{
            "height":500,
            "width":500,
            "count":2},
    "animations":{
            move:{

            	frames:[0,1,1,0],
            	speed:0.1
            }

          }

    });

var finn = new createjs.Sprite(fin,"move");
    finn.x=1100;
    finn.y=575;
    finn.scaleX = finn.scaleY = 0.4;

//second view
    bitmap.scaleX = bitmap.scaleY = 0.2 ;
    bitmap.x = 960;
    bitmap.y = 600;
	
    rect.graphics.beginFill("black");
    rect.graphics.drawRect(0,0,1440,810);
    rect.alpha = 0.5 ; 

   
    

//index view


bg1.scaleX = 0.75;
bg1.scaleY = 0.77;


play.scaleY = play.scaleX = 0.3;
play.x = 505;
play.y = 540;

//GAME
push.scaleX = push.scaleY = knea.scaleX = knea.scaleY = shaitsu.scaleX = shaitsu.scaleY = 0.3;
stretch.scaleX = stretch.scaleY =stretch1.scaleX = stretch1.scaleY = stretch2.scaleX = stretch2.scaleY =  0.3;
tab.scaleX = tab.scaleY = 0.3;


method.x = 575,
method.y = 615;

txtbg.scaleX = 0.75;
txtbg.scaleY = 0.75;

txt.scaleY = txt.scaleX = 0.4;
txt.x = 100;
txt.y = 600;


person.scaleX = person.scaleY = 0.3;
person.y = 650;
person.x = 200;


//createjs.Ticker.addEventListener("tick",stage);

createjs.Ticker.addEventListener("tick",handleTick);
createjs.Ticker.setFPS(60);


txt.addEventListener("pressmove", handlePress);
rect.addEventListener("pressmove", handlePress);



play.on("click", tur);
play.on("click", playa);

turtle.on("click",go);

function tur(event){

	stage.removeAllChildren();


	stage.addChild(turtle,touch);

}

var gotrue = false;

function go(event){
     
	gotrue = true;
    
	stage.removeAllChildren();
	index.removeChild(bg1,play);


    txtview.addChild(txtbg,rect,txt,bitmap,image,image1,image2,image3);

    stage.addChild(txtview);
    //stage.addChild(txt);
    
    


}
function handlePress(event) {
     // A mouse press happened.
      txt.y = stage.mouseY;
     // Listen for mouse move while the mouse is down:
 }

bitmap.on("click", handleMouseDown);
bitmap.on("click", downmethod);
bitmap.on("click", playa);



	function handleMouseDown(event){
      

	   stage.removeAllChildren();

      
       

       method.addChild(knea,shaitsu,stretch);
       method.addChild(push,tab,stretch1,stretch2);

       position.addChild(person,head,hand,hand1,back,leg,leg1,down,down1);


       
       stage.addChild(Gbg);
       
       stage.addChild(position);
       stage.addChild(method);
       stage.addChild(head);
	   stage.addChild(motion);
	   motion.addChild(opp);

	   




  		}


	tab.on("click",tabb);
	stretch.on("click",stretchh);  
	shaitsu.on("click",shaitsuu);
	push.on("click",pushh);
	knea.on("click",kneaa);

	stretch1.on("click",stretchh1);  
	stretch2.on("click",stretchh2);  


	tab.on("click",playb);
	stretch.on("click",playb);  
	shaitsu.on("click",playb);
	push.on("click",playb);
	knea.on("click",playb);

	head.on("click",headmethod);
     hand.on("click",handmethod);
     hand1.on("click",handmethod);
     back.on("click",backmethod);
     leg.on("click",legmethod);
     leg1.on("click",legmethod);
     down.on("click",downmethod);
     down1.on("click",downmethod);


     head.on("click",playc);
     hand.on("click",playc);
     hand1.on("click",playc);
     back.on("click",playc);
     leg.on("click",playc);
     leg1.on("click",playc);
     down.on("click",playc);
     down1.on("click",playc);

     finn.on("click",finish);
     finn.on("click",playa);
     
     again.on("click",reload);
     again.on("click",playa);

     finish1.scaleX = 0.75;
	    finish1.scaleY = 0.77; 

	    again.scaleX = again.scaleY = 0.3;
	    again.x = 500;
	    again.y = 550;


     function reload(event){
       

     	location.reload();


     }

     function finish(event){
       
        var sound = createjs.Sound.play("a");


     	

     	stage.removeAllChildren();

     	stage.addChild(finish1);
     	stage.addChild(again);

     }

	function headmethod(event){
		

		hej = true;
		haj = false;
		bkj = false;
		lgj = false;
		dnj = false;

		head1.graphics.clear().beginFill("red").drawCircle(222.5,710,10).endFill();

		shaitsu.y = tab.y = 40 ;
  		shaitsu.x = 40;
		tab.x = 120 ; 
		shaitsu.alpha = tab.alpha = 1;
		knea.alpha = stretch.alpha = stretch1.alpha = stretch2.alpha = 0;

		method.removeChild(push,knea,stretch,stretch1,stretch2);

		method.addChild(shaitsu,tab);

		head.x = -1000;

		hand.x = 0;
		hand1.x = 0;
		back.x = 0;
		leg.x = 0;
		leg1.x = 0;
		down.x= 0 ;
		down1.x = 0;

		
		head1.x = 0;
		hand2.x = -1000;
		hand3.x = -1000;
		back1.x = -1000;
		leg2.x = -1000;
		leg3.x = -1000;
		down2.x= -1000 ;
		down3.x = -1000;
	    //position.removeChild(hand2,hand3,back1,leg2,leg3,down2,down3);
	    
	    switch (num){
	    	
	    	case 1 :
	    		if(headd < 1 )
	    		{num +=1 ;

	    		}

	        break;
	    	
	    	case 2:
	    	    if(headd < 1 )
	    		{num +=1 ;
	    		stage.addChild(per40);
	    		stage.removeChild(per20);}
	    	break;
	    	
	    	case 3:
	    		if(headd < 1 )
	    		{num +=1 ;
	    			stage.addChild(per60);
	    			stage.removeChild(per40);}
	    	break;
	    	
	    	case 4:
	    		if(headd < 1 )
	    		{num +=1 ;
	    			stage.addChild(per80);
	    			stage.removeChild(per60);}
	    	break;
	    	
	    	case 5:
	    		if(headd < 1 )
	    		{num +=1 ;
	    			stage.addChild(finn);
	    			stage.removeChild(per80);}
	    	break;
	    	

	    }
	    
	    headd +=1;
	    bar.graphics.clear().beginFill("red").drawRect(1000,700,60*num,50);

		position.addChild(head1);


		}

	function handmethod(event){

		hej = false;
		haj = true;
		bkj = false;
		lgj = false;
		dnj = false;


    	hand2.graphics.clear().beginFill("red").drawCircle(357,665,10).endFill();
    	hand3.graphics.clear().beginFill("red").drawCircle(357,755,10).endFill();

    	
 		push.y = knea.y = 40 ;
 		push.x = 40;
 		knea.x = 120 ; 
 		shaitsu.alpha = stretch.alpha = stretch1.alpha = stretch2.alpha = tab.alpha =0;

 		push.alpha = knea.alpha = 1;

 		method.removeChild(shaitsu,stretch,tab,stretch1,stretch2);

 		method.addChild(push,knea);
		
		head.x = 0;

		hand.x = -1000;
		hand1.x = -1000;
		back.x = 0;
		leg.x = 0;
		leg1.x = 0;
		down.x= 0 ;
		down1.x = 0;

		head1.x = -1000;
		hand2.x = 0;
		hand3.x = 0;
		back1.x = -1000;
		leg2.x = -1000;
		leg3.x = -1000;
		down2.x= -1000 ;
		down3.x = -1000;

		switch (num){
	    	
	    	case 1 :
	    		if(handd < 1 )
	    		{num +=1 ;
	    		
	    		}

	        break;
	    	
	    	case 2:
	    	    if(handd < 1 )
	    		{num +=1 ;
	    		stage.addChild(per40);
	    			stage.removeChild(per20);}
	    	break;
	    	
	    	case 3:
	    		if(handd < 1 )
	    		{num +=1 ;stage.addChild(per60);
	    			stage.removeChild(per40);}
	    	break;
	    	
	    	case 4:
	    		if(handd < 1 )
	    		{num +=1 ;stage.addChild(per80);
	    			stage.removeChild(per60);}
	    	break;
	    	
	    	case 5:
	    		if(handd < 1 )
	    		{num +=1 ;
	    		stage.addChild(finn);
	    			stage.removeChild(per80);}
	    	break;
	    	

	    }
	    
	    handd +=1;

	    bar.graphics.clear().beginFill("red").drawRect(1000,700,60*num,50);


		//position.removeChild(head1,back1,leg2,leg3,down2,down3);

 		position.addChild(hand2,hand3);


	}
	function backmethod(event){

		hej = false;
		haj = false;
		bkj = true;
		lgj = false;
		dnj = false;


		back1.graphics.clear().beginFill("red").drawCircle(310,710.5,10).endFill();

		stretch.y = tab.y = push.y= 40 ;
		tab.x = 80 ; 
		push.x = 160;  
		stretch.alpha = tab.alpha = push.alpha = 1;
		knea.alpha = shaitsu.alpha = stretch1.alpha = stretch2.alpha = 0;
		method.removeChild(knea,shaitsu,stretch1,stretch2);

		method.addChild(stretch,tab,push);
	    
		head.x = 0;

		hand.x = 0;
		hand1.x = 0;
		back.x = -1000;
		leg.x = 0;
		leg1.x = 0;
		down.x= 0 ;
		down1.x = 0;

		head1.x = -1000;
		hand2.x = -1000;
		hand3.x = -1000;
		back1.x = 0;
		leg2.x = -1000;
		leg3.x = -1000;
		down2.x= -1000 ;
		down3.x = -1000;

		switch (num){
	    	
	    	case 1 :
	    		if(backk < 1 )
	    		{num +=1 ;
	    			}

	        break;
	    	
	    	case 2:
	    	    if(backk < 1 )
	    		{num +=1 ;
	    			stage.addChild(per40);
	    			stage.removeChild(per20);
	    		}
	    	break;
	    	
	    	case 3:
	    		if(backk < 1 )
	    		{num +=1 ;
	    			stage.addChild(per60);
	    			stage.removeChild(per40);
}
	    	break;
	    	
	    	case 4:
	    		if(backk < 1 )
	    		{num +=1 ;
	    			stage.addChild(per80);
	    		    stage.removeChild(per60);

	    		}
	    	break;
	    	
	    	case 5:
	    		if(backk < 1 )
	    		{num +=1 ;
	    		stage.addChild(finn);
	    			stage.removeChild(per80);}
	    	break;
	    	

	    }
	    
	    backk +=1;



		
		//position.removeChild(head1,hand2,hand3,leg2,leg3,down2,down3);
		position.addChild(back1);

	}

	function legmethod(event){

		hej = false;
		haj = false;
		bkj = false;
		lgj = true;
		dnj = false;


    	leg2.graphics.clear().beginFill("red").drawCircle(410,693,10).endFill();
    	leg3.graphics.clear().beginFill("red").drawCircle(410,728,10).endFill();


		stretch.y = stretch1.y = stretch2.y= 40 ;
		stretch1.x = 80 ; 
		stretch2.x = 160;  
		stretch.alpha = stretch1.alpha = stretch2.alpha = 1;
		push.alpha = knea.alpha = shaitsu.alpha = tab.alpha = 0;

		method.removeChild(push,knea,shaitsu,tab);

		method.addChild(stretch,stretch1,stretch2);
		
		head.x = 0;

		hand.x = 0;
		hand1.x = 0;
		back.x = 0;
		leg.x = -1000;
		leg1.x = -1000;
		down.x= 0 ;
		down1.x = 0;

		head1.x = -1000;
		hand2.x = -1000;
		hand3.x = -1000;
		back1.x = -1000;
		leg2.x = 0;
		leg3.x = 0;
		down2.x= -1000 ;
		down3.x = -1000;

		switch (num){
	    	
	    	case 1 :
	    		if(legg < 1 )
	    		{num +=1 ;}

	        break;
	    	
	    	case 2:
	    	    if(legg  < 1 )
	    		{num +=1 ;
	    		stage.addChild(per40);
	    		stage.removeChild(per20);
			}
	    	break;
	    	
	    	case 3:
	    		if(legg  < 1 )
	    		{num +=1 ;	stage.addChild(per60);
	    				   stage.removeChild(per40);

			}
	    	break;
	    	
	    	case 4:
	    		if(legg  < 1 )
	    		{num +=1 ;
	    			stage.addChild(per80);
	    			 stage.removeChild(per60);
			}
	    	break;
	    	
	    	case 5:
	    		if(legg < 1 )
	    		{num +=1 ;
	    		 
	    		 stage.addChild(finn);
	    			stage.removeChild(per80);}
	    	break;
	    	

	    }
	    
	    legg  +=1;

	    bar.graphics.clear().beginFill("red").drawRect(1000,700,60*num,50);
		//position.removeChild(head1,hand2,hand3,back1,down2,down3);
		position.addChild(leg2,leg3);
		
	}

	var abc = false ; 

	function downmethod(event){
		
		var abd = true;

		hej = false;
		haj = false;
		bkj = false;
		lgj = false;
		dnj = true;

    	down2.graphics.clear().beginFill("red").drawCircle(460,693,10).endFill();
    	down3.graphics.clear().beginFill("red").drawCircle(460,728,10).endFill();

		stretch.y = knea.y = shaitsu.y= 40 ;
		knea.x = 80 ; 
		shaitsu.x = 160;  
		stretch.alpha = knea.alpha = shaitsu.alpha = 1;
		push.alpha = stretch1.alpha = stretch2.alpha = tab.alpha = 0;

		method.removeChild(push,tab,stretch1,stretch2);

		method.addChild(stretch,knea,shaitsu);
		
		head.x = 0;

		hand.x = 0;
		hand1.x = 0;
		back.x = 0;
		leg.x = 0;
		leg1.x = 0;
		down.x= -1000 ;
		down1.x = -1000;

		head1.x = -1000;
		hand2.x = -1000;
		hand3.x = -1000;
		back1.x = -1000;
		leg2.x = -1000;
		leg3.x = -1000;
		down2.x= 0 ;
		down3.x = 0;

		num+=1;

		switch (num){
	    	
	    	case 1 :
	    		if(downn < 1 )
	    		{num +=1 ;
	    		 stage.addChild(per20);
	    		 
	    		}

	        break;
	    	
	    	

	    }
	    
	    downn  +=1;

	    //bar.graphics.clear().beginFill("red").drawRect(1000,700,60*num,50);
	    
		//position.removeChild(head1,hand2,hand3,back1,leg2,leg3);
		position.addChild(down2,down3);
	}

	function tabb(event){

		motion.removeAllChildren ();

		if(hej==true){

			motion.addChild(hhe2);
		}
		if (bkj == true) {

			motion.addChild(bb3);
		}


	}
	function stretchh(event){

		motion.removeAllChildren ();

		if(dnj==true){motion.addChild(ff3);}
		if(lgj==true){motion.addChild(ll1);}

		if(bkj==true){motion.addChild(bb1);}

	}
	function stretchh1(event){

		motion.removeAllChildren ();

		if(lgj==true){motion.addChild(ll2);}


	}
	function stretchh2(event){

		motion.removeAllChildren ();

		if(lgj==true){motion.addChild(ll3);}


	}



	function shaitsuu(event){

	     motion.removeAllChildren ();

		if(dnj==true){motion.addChild(ff1);}
		if(hej==true){motion.addChild(hhe1);}
	}
	function pushh(event){

		motion.removeAllChildren ();

		if(bkj==true){motion.addChild(bb2);}
		if(haj==true){motion.addChild(hha2);}

	}
	function kneaa(event){

		motion.removeAllChildren ();

		if(dnj==true){motion.addChild(ff2);}
		if(haj==true){motion.addChild(hha1);}
	}

function handleTick(){

	var a = 1;

	if(	gotrue == true){

		 txt.y -= 1 ;
	
		 if(txt.y < -1350 && abc == false ){

		 	//downmethod();

		 }

		 if(txt.y < 600 && txt.y > 150) {

	 	image.alpha += 0.01 ; 

	 }
	 if(txt.y < 300 && txt.y > 0){
	 	image.alpha -= 0.01 ; 
	 } 

	 if(txt.y < 150 && txt.y > -150){
	 	image1.alpha += 0.01 ; 
	 } 

	 if(txt.y < 0 && txt.y > -300){
	 	image1.alpha -= 0.01
	 } 

	 if(txt.y < -150 && txt.y > -450){
	 	image2.alpha += 0.01
	 } 

	 if(txt.y < -300 && txt.y > -600){
	 	image2.alpha -= 0.01

	 } 
	 if(txt.y < -450 && txt.y > -750){
	 	image3.alpha += 0.01
	 }

	 if(txt.y < - 950 && txt.y > -1250){
	   image3.alpha -= 0.01

	 } 


}

 
     

     if(txt.y < -1250){
        
        //downmethod();
	 }

	 
     
  	 if (head.hitTest(stage.mouseX, stage.mouseY )) { head.alpha = 1; }
     else {head.alpha = 0.2;}
   
     if (hand.hitTest(stage.mouseX, stage.mouseY)||hand1.hitTest(stage.mouseX, stage.mouseY)) { hand.alpha = 1; hand1.alpha = 1;}
     else {hand.alpha = 0.2; hand1.alpha = 0.2;}
     
     
     if (back.hitTest(stage.mouseX, stage.mouseY)) { back.alpha = 1; }
     else{back.alpha = 0.2;}
     
     if (leg.hitTest(stage.mouseX, stage.mouseY)||leg1.hitTest(stage.mouseX, stage.mouseY)) { leg.alpha = 1;leg1.alpha = 1; }
     else{leg.alpha = 0.2;leg1.alpha = 0.2; }

     
     if (down.hitTest(stage.mouseX, stage.mouseY)||down1.hitTest(stage.mouseX, stage.mouseY)) { down.alpha = 1; down1.alpha = 1;}
     else{ down.alpha = 0.2; down1.alpha = 0.2;}
     
  	 if(again.hitTest(stage.mouseX, stage.mouseY-150)){ again.scaleX = again.scaleY = 0.25; again.x = 538,again.y = 550;}
  	 else{ again.scaleX = again.scaleY = 0.3; again.x = 500;
	    again.y = 550;}

	


    
	stage.update();


}  


function playSound(event){

	var soundIntance = createjs.Sound.play("sound",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
}

function playc(event){

	var sound2 = createjs.Sound.play("c");

}

function playb(event){

	var sound1 = createjs.Sound.play("b");

}

function playa(event){

	var sound = createjs.Sound.play("a");

}


index.addChildAt(play,0);
index.addChildAt(bg1,0);
stage.addChild(index);



 //container.addChild(bitmap);
 // stage.addChild(container);
 // stage.addChild(txt);
 // stage.addChild(rect);

});