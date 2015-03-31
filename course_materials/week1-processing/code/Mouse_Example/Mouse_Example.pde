/*
  Mouse Example
*/

// Background Color = background()
int firstVariable = 0;
// Fill color - fill()
int secondVariable = 0;

Draw a rectangle, corresponding to where the mouse is, 
change that rectangle according to mouseX and mouseY variables 

void setup() {
  size(100,100);
}
void draw() {
  background(255);
  // If boxPosition > width
  // boxPosition = 0
    if ( boxPosition == width  ) {
      boxPosition = 0;
    }
  rect(boxPosition,height/2,10,10);
   boxPosition = boxPosition + 1;  // boxPosition++;
}
