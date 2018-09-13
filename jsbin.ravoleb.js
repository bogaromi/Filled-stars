function filledStar(x,y,a) {
var c = document.getElementById('myCanvas').getContext('2d');
var d= a/6;

c.fillStyle="#FF69B4";
c.moveTo(x,y);
c.lineTo(x+d*2.1,y);
c.lineTo(x+d*3,y-d*2.5);
c.lineTo(x+d*3.9,y);
c.lineTo(x+d*6,y);
c.lineTo(x+d*4.4,y+d*1.2);
c.lineTo(x+d*5.4,y+d*3.6);
c.lineTo(x+d*3,y+d*2);
c.lineTo(x+d*0.7,y+d*3.6);
c.lineTo(x+d*1.6,y+d*1.2);
c.lineTo(x,y);
c.strokeStyle="#FF69B4";
c.stroke();
c.fill();
  return;
}
filledStar(40,50,75);
filledStar(130,120,100);
filledStar(250,220,150);