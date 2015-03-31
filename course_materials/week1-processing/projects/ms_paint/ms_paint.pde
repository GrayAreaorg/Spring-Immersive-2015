/* 
MS Paint
10 Second Art Pieces - Shape Changer with Random Color Combo ever 10 Seconds.

'p' - pause drawing
'o' - start drawing

*/

String shape = "sq";
int frameCount = 0;
float rand_1 = random(0,1);
float rand_2 = random(0,255);
float rand_3 = random(0,255);
int draw_now = 1;

void setup() {
  size(500,500);
  noStroke();
}

void draw() {
  
  
  // draw with brush shape
  if (draw_now == 1) {
    if (shape == "sq") {
      rect(mouseX - 15, mouseY - 15, 30, 30);
    } else if (shape == "circ") {
      ellipse(mouseX, mouseY, 30, 30);
    } else if (shape == "tri") {
      triangle(mouseX - 15, mouseY + 15, mouseX, mouseY - 15, mouseX + 15, mouseY + 15);
    }
  }
  
  //Menu Code at Bottom
  fill(255);
  rect(0,450,width,50);
  
  //Rect
  fill(0);
  rect(20, 460, 30, 30);
  
  ellipse(80, 475, 30, 30);
  
  triangle(110, 490, 125, 460, 140, 490);
  
  if (mouseY > 450 && mouseY < 500) { // youre in the menu
    if (mouseX > 20 && mouseX < 50) { // sq
      shape = "sq";
    } else if (mouseX > 80 && mouseX < 110) { // circ
      shape = "circ";
    } else if (mouseX > 110 && mouseX < 140) { // tri
      shape = "tri";      
    }
  }
  
  // maybe change background]
  frameCount++;  
  if (frameCount > 33 * 10) {
    rand_1 = random(0,255);
    rand_2 = random(0,255);; 
    rand_3 = random(0,255);; 
    background(int(rand_1), int(rand_2), int(rand_3));
    frameCount = 0;
  }
  // maintain fill color    
  fill(int(rand_3), int(rand_1), int(rand_2));
  
  if (key == 'p') {
      draw_now = 0;
  } else if (key == 'o'){
      draw_now = 1; 
  }
  
  //println(mouseX, mouseY);
}  
