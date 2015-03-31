/*

Menu Example

*/

int buttonValue = 0;

void setup() {
  size(250,250);
}

void draw() {
  if (buttonValue == 0) {
    fill(255,0,0);
  } else if (buttonValue ==1) {
    fill(0,0,255);
  }
  rect(mouseX,mouseY,10,10);
  
  //Menu Code goes here
  //White Background
  fill(255);
  rect(0,225,250,25);
  
  //Red Button
  fill(255,0,0);
  rect(25, 230, 10, 10);
  
  //Blue
  fill(0,0,255);
  rect(150, 230, 10, 10);
  
  if (mouseX > 25 && mouseX < 35 && mouseY > 230 && mouseY < 240) {
    //Set to Red
    buttonValue = 0;
  }
    if (mouseX > 150 && mouseX < 160 && mouseY > 230 && mouseY < 240) {
    //Set to Blue
      buttonValue = 1;
  }
  
  
}
















