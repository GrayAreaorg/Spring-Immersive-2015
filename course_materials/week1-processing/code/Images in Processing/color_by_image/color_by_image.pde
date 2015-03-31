/*
Color By Image - "Paints" according to a background picture
*/

PImage img;
  color c;
void setup() {
  size(640, 360);
  frameRate(30);
  img = loadImage("moon-wide.jpg");
  img.loadPixels();

}

void draw() {
  if (mousePressed) {
      int loc = mouseX + mouseY*img.width;
      // Get the R,G,B values from image
      float r,g,b;
      r = red (img.pixels[loc]);
      g = green (img.pixels[loc]);
      b = blue (img.pixels[loc]);
      c = color(r, g, b);
      
      stroke(c);
      strokeWeight(5);
      point(mouseX,mouseY);
    
  }
}
