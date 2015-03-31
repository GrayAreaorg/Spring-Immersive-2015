/*
  Poor man's MS Paint
*/

int hue = 0; 
int areWeDrawing = 1;
int brushSize = 10;
  
void setup() {
  size(800, 800);
  background(255);
  
  // set color mode to Hue/Saturation/Brightness instead of RGB
  colorMode(HSB, 100);
}

void draw() {
  // pressing 1 turns off drawing
  if(key ==  '1') {
    areWeDrawing = 0;
  }
  
  // pressing 2 turns on drawing
  if(key == '2') {
    areWeDrawing = 1;
  }

  // if we are within the bottom menu, set the color (hue)
  // to the correct color for our X mouse position
  if (mouseY > height-20 && mouseY < height) {
    hue = hueForXPosition(mouseX);
  }
  
  // if we are within the + button, increase our drawing size
  if (mouseX > 50 && mouseX < 100 && mouseY > 25 && mouseY < 75) {
    brushSize++;
  }  
  
  // if we are within the - button, decrease our drawing size
  if (mouseX > 50 && mouseX < 100 && mouseY > 125 && mouseY < 175) {
    brushSize--;
  }

  // set our colors
  // much like Drake, HSB color mode is on a 0-100 scale, rather than RGB's 0-255
  stroke(hue, 100, 100);
  fill(hue, 100, 100);
  
  // draw at our current mouse position
  if(areWeDrawing == 1) {
    rect(mouseX, mouseY, brushSize, brushSize);
  }
  
  // create the bottom menu (a rainbow color selector)
  drawColorMenu();
  
  drawPlusAndMinus();
}

void drawPlusAndMinus() {
  strokeWeight(10);
  stroke(0,0,0);
  
  // draw plus
  line(50, 50, 100, 50);
  line(75, 25, 75, 75);
 
  // draw minus
  line(50, 150, 100, 150); 
}

void drawColorMenu() {
  // for each x position, from the left (0) until the right (width, currently 800),
  // draw a 20-pixel-high line in the right color for that position
  // this will make a rainbow effect
  for(int i = 0; i < width; i++) {
    int hue = hueForXPosition(i);
    stroke(hue, 100, 100);    // HSB format, not RGB
    line(i, height-20, i, height);
  }
}

int hueForXPosition(int x) {
  // we need to map an x position, which can be anywhere from 0 to width
  // to a 0-100 scale, representing a hue
  float scalingFactor = 100.0/width;
  float hue = x * scalingFactor;
  
  // convert hue to an int when we return it
  return int(hue);
}
