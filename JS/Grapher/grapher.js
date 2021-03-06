/*
abs(X)
Returnerar absolutbeloppet av talet X.
arc(X, Y, RADIE, VINKEL, TJOCKLEK, FÄRG)
Ritar ett cirkelsegment på position (X, Y) med den givna radien, vinkeln, linjetjockleken och färgen.
ceil(X)
Returnerar talet X utan några decimaler, avrundat uppåt.
circle(X, Y, RADIE, FÄRG)
Ritar en fylld cirkel på position (X, Y) med den givna radien och färgen.
clearScreen()
Rensar ritytan.
distance(X1, Y1, X2, Y2)
Returnerar avståndet mellan punkterna (X1, Y1) och (X2, Y2). Kan också anropas med endast två argument om de är objekt som innehåller variablerna x och y.
distance3D(X1, Y1, Z1, X2, Y2, Z2)
Returnerar avståndet mellan punkterna (X1, Y1, Z1) och (X2, Y2, Z2). Kan också anropas med bara två argument om de är objekt som innehåller variablerna x, y och z.
fill(FÄRG)
Fyller ritytan med en färg.
floor(X)
Returnerar talet X utan några decimaler, avrundat neråt.
getPixel(X, Y)
Returnerar ett objekt som innehåller variablerna red, green och blue, som representerar färgen på den pixel som befinner sig på positionen (X, Y).
hideMouse()
Döljer muspekaren.
keyboard
Ett objekt som innehåller variabler för tangenterna på tangentbordet. Variablerna är antingen sanna eller falska beroende på om just den tangenten är nedtryckt för tillfället. De tangenter som du kan kontrollera med namn är: up, down, left, right, space, shift, alt, ctrl, enter, zero → nine, a → z. Bokstäverna stämmer bara på svenska och engelska tangentbord. Det går också att kontrollera keyboard[X], där X är koden för en viss tangent.
line(X1, Y1, X2, Y2, TJOCKLEK, FÄRG)
Ritar ett streck från koordinaten (X1, Y1) till (X2, Y2) med den givna tjockleken och färgen.
loopSound(LJUD, VOLYM)
Spela ett bakgrundsljud om och om igen i bakgrunden, exempelvis musik. Argumenten fungerar som i playSound som är beskrivet nedan.
math
Ett objekt som gör det lätt att experimentera med matematik.
mixColor(R, G, B)
Används för att blanda en egen färg. Det första argumentet anger hur mycket rött som ska blandas in, det andra anger mängden grönt och det tredje mängden blått. Varje argument ska vara mellan 0 och 255. Exempel: circle(100, 100, 50, mixColor(100, 0, 0));.
mouse
Ett objekt som innehåller musens nuvarande position och status. Variablerna x och y ger positionen och variablerna left, right och middle ger sant eller falskt beroende på om motsvarande musknapp är nedtryckt.
pi
En variabel som innehåller talet pi.
picture(X, Y, BILD)
Placerar en bild på ritytan, där bildens övre vänstra hörn hamnar på position (X, Y). Argumentet BILD kan vara en webbadress eller en sökväg till en bild på datorn.
playSound(LJUD, VOLYM)
Spela upp en ljudeffekt. Argumentet volym ska vara ett tal mellan 0 och 1; om du inte anger någon volym så blir den 1.
pow(BAS, EXPONENT)
Returnerar ett tal som är BAS upphöjt till EXPONENT. Om man anropar funktionen med basen 2 och exponenten 3 blir resultatet: 8.
preloadSound(LJUD)
Laddar in ett ljud i datorns minne.
random(X)
Returnerar ett slumptal mellan 0 och X - 1.
randomAlternative(LISTA)
Returnerar ett slumpmässigt element från en lista.
rectangle(X, Y, BREDD, HÖJD, FÄRG)
Ritar en rektangel på koordinaten (X, Y) med den givna bredden, höjden och färgen.
restore()
Återställer koordinatsystemet till det tillstånd som det var i vid det senaste anropet av save().
ring(X, Y, RADIE, TJOCKLEK, FÄRG)
Ritar en ring på position (X, Y) med den givna radien, linjetjockleken och färgen.
rotate(GRADER)
Roterar koordinatsystemet med GRADER grader.
rotateRadians(RADIANER)
Roterar koordinatsystemet med RADIANER radianer.
save()
Sparar koordinatsystemets nuvarande läge.
scale(X-FAKTOR, Y-FAKTOR)
Förstorar eller förminskar hela koordinatsystemet i X- respektive Y-ledd. Om ett negativt tal anges blir koordinatsystemet spegelvänt kring den axeln.
Exempel: scale(2, 2) (allt blir dubbelt så stort)
Exempel: scale(1, -1) (allt blir upp-och-nedvänt)
showMouse()
Gör att muspekaren blir synlig.
sin(V) cos(V) tan(V) asin(V) acos(V) atan(V)
De vanligaste trigonometriska funktionerna sinus, cosinus, tangens samt deras inverser. Alla tar som argument en vinkel uttryckt i radianer.
sqrt(X)
Returnerar kvadratroten av talet X.
start()
Den första funktionen som körs.
stopSound(LJUD)
Stoppar ett ljud om det håller på att spelas upp.
stopUpdate()
Stoppar update()-funktionen och avslutar därmed animeringen.
text(X, Y, STORLEK, TEXTSTRÄNG, FÄRG)
Ritar ut textsträngen TEXTSTRÄNG på koordinaten (X, Y) med den givna färgen och storleken.
totalHeight
Den totala höjden på den tillgängliga ritytan.
totalWidth
Den totala bredden på den tillgängliga ritytan.
touchscreen
Ett objekt som innehåller information om användarens petskärm. Objektet innehåller variabeln currentlyTouched, som är sann eller falsk beroende på om någon petar för tillfället, samt arrayen points som innehåller de beröringspunkter som just då finns. Varje beröring har tre egenskaper, x, y och id.
translate(X, Y)
Förflyttar koordinatsystemets origo till koordinaten (X, Y).
triangle(X1, Y1, X2, Y2, X3, Y3, FÄRG)
Ritar en triangel som har sina hörn på koordinaterna (X1, Y1), (X2, Y2) och (X3, Y3) med den givna färgen.
turtle
Ett objekt som man kan använda för att göra så kallad turtlegrafik.
update()
En funktion som anropas många gånger per sekund och gör det möjligt för programmeraren att skapa rörliga objekt.
updatesPerSecond
Innehåller ett tal som anger hur många gånger per sekund som update() anropas.
*/

/*
INTRESTING FUNCTIONS
 f(x) = 5*Math.max(Math.sin(0.5*x),Math.sin(x),Math.sin(2*x))
 f(x) = Math.sin(x)*Math.tan(201*x)              scale = 11.904
 f(x) = if(cur.x%3 == 0){
    return Math.sin(x);
  } else if( (cur.x+1)%3==0){
   return abs(x);
  } else {
    return 5*Math.max(Math.sin(0.5*x),Math.sin(x),Math.sin(2*x));
  }

 f(x) =   if((Math.round(rep.x)+3)%2 == 0){
    return Math.sin(x);
  } else {
    return 2;
  }

  f(x) = if(cur.x%2 == 0){
    if((Math.round(rep.x)+3)%2 == 0){
    return abs(x);
  } else {
    return 2;
  }
  } else {
   if((Math.round(rep.x)+3)%2 == 0){
    return -abs(x);
  } else {
    return -2;
  }
  }

  FOR INTEGRAL CALCULATION
  if(cur.x%2== 0){
    return 5*Math.sin(x);
  } else {
    return 0
  }
*/

/*
MOTH BOI :   const VL = Math.sin(Math.cos(rep.x)-Math.sin(rep.y));
             const HL = Math.cos(Math.sin(rep.x*rep.y)+Math.sin(rep.y/rep.x));

STARRY PROPELLER BOI:   const VL = Math.cos(d*rep.x*rep.y);
                        const HL = sqrt(pow(rep.x,2)+pow(rep.y,2));

*/





var scale = 10;
var rep = {x: -(scale/2), y:scale/2};
let cur = {x:0, y:totalHeight/2};
let last = {x:0, y:0};
let textnum = {x:0,y:0};
let coord = {x:0,y:0};
var thick1 = 0.005;
let thick = thick1*scale;
const res = 1;
let color = mixColor(0, 0, 0);
const diagLength = sqrt(pow(totalWidth/2,2)+pow(totalHeight/2,2));
updatesPerSecond = 300;

var d = 1;

drawGrid();
drawFunc2();


function update() {


  if (keyboard.up == true) {
    scale += 1;
    reset();
  }

  if (keyboard.down == true) {
    scale -= 1;
    if (scale < 0.1 ) {
      scale = 0.1;
    }
    reset();
  }

  if (keyboard.n == true) {
    d += 0.1;
    reset();
  }

  if (keyboard.m == true) {
    d -= 0.1;
    reset();
  }

  if (keyboard.o == true) {
    thick1 += 0.0001;
    reset();
  }

  if (keyboard.p == true) {
    thick1 -= 0.0001;
    reset();
  }

  if (keyboard.s == true) {
    stopUpdate();
  }



}



function f(x) {if(cur.x%2== 0){
  return 5*Math.sin(x);
} else {
  return 0
}}


function drawGrid() {
  rectangle(0, 0, totalWidth, totalHeight, "#282828")
  line(totalWidth/2,0,totalWidth/2,totalHeight,1,"#848484"); //rita y-axel
  line(0,totalHeight/2,totalWidth,totalHeight/2,1,"#848484"); //rita x-axel

  for (var i = 0; i < 10; i++) {

    line(totalWidth/2-5,i*(totalHeight/10),totalWidth/2+5,i*(totalHeight/10),1,"#848484"); //rita snäpp y-axel
    textnum.y = (   Math.round(  ( scale/2-i*(scale/10) )*100  )   )/100;
    text(totalWidth/2+10,i*(totalHeight/10) , 10, (textnum.y).toString(), "#848484"); //numrera snäpp y-axel

    line(i*(totalWidth/10),totalHeight/2-5,i*(totalWidth/10),totalHeight/2+5,1,"#848484"); //rita snäpp x-axel
    textnum.x = (   Math.round(  ( (-(scale/2)+i*(scale/10)) )*100  )   )/100;
    text(i*(totalWidth/10),totalHeight/2-10 , 10, (textnum.x).toString(), "#848484"); //numrera snäpp x-axel
  }
  text(totalWidth-130,30,30,scale,"white");
  text(totalWidth-130,60,30,d,"white");
  text(totalWidth-130,90,30,thick1,"white");

}

function drawFunc() {
  rep.y = f(rep.x);
  if(rep.y > scale/2 ){
    cur.y = 0;
  } else {
    cur.y = totalHeight/2 - rep.y*(totalHeight/scale);
  }

  color = mixColor( (sqrt(pow(cur.x-totalWidth/2,2)+pow(cur.y-totalHeight/2,2))/(diagLength))*255  ,    255 - (abs(cur.y-totalHeight/2)/(totalHeight/2))*255  , 255-(abs(cur.x-totalWidth/2)/(totalWidth/2))*255    )
  line(cur.x, cur.y, last.x, last.y, 1, color);
  //circle(cur.x, cur.y, 1, color);
  last.x = cur.x;
  last.y = cur.y;
  cur.x = cur.x + res;
  rep.x = rep.x + (res/totalWidth)*scale;
}

function drawFunc2() {

  for (var i = 0; i < totalWidth; i++) {

      for (var j = 0; j < totalHeight; j++) {

          const VL = Math.sin(rep.x*rep.y)+Math.tan(rep.y);
          const HL = Math.cos(rep.x*rep.x);
            const diff = Math.abs( VL - HL ); // y-x = y=x

            if (diff < thick) {
              color = mixColor( (sqrt(pow(coord.x-totalWidth/2,2)+pow(coord.y-totalHeight/2,2))/(diagLength))*255  ,    255 - (abs(coord.y-totalHeight/2)/(totalHeight/2))*255  , 255-(abs(coord.x-totalWidth/2)/(totalWidth/2))*255    );
              circle(coord.x, coord.y, 1, color);

            }
              coord.y += res;
              rep.y -= res*(scale/totalHeight);
        }

        coord.x += 1;
        rep.x += (scale/totalWidth);
        coord.y = 0;
        rep.y = scale/2;


  }


}


 function reset() {
   clearScreen();
   drawGrid();
   cur.x = 0;
   rep.x = -(scale/2);
   cur.y = totalHeight/2;
   rep.y = scale/2;
   coord.x = 0;
   coord.y = 0;
   thick = thick1*scale;
   drawFunc2();
 }
