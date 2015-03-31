/*
Color Flash - When clicked, fill the window with the current pixel's color
*/

PImage img;
  color c;
void setup() {
  size(640, 360);
  frameRate(30);
  img = loadImage("moon-wide.jpg");
  img.loadPixels();
  // Only need to load the pixels[] array once, because we're only
  // manipulating pixels[] inside draw(), not drawing shapes.
  loadPixels();
}

void draw() {
  image(img,0,0);
  // for (int x = 0; x < img.width; x++) {
  //   for (int y = 0; y < img.height; y++ ) {
  //     // Calculate the 1D location from a 2D grid
  //     int loc = x + y*img.width;
  //     // Get the R,G,B values from image
  //     float r,g,b;
  //     r = red (img.pixels[loc]);
  //     g = green (img.pixels[loc]);
  //     b = blue (img.pixels[loc]);
  //     c = color(r, g, b);
  //     pixels[y*width + x] = c;

  //   }

  // }
  // updatePixels();
  if (mousePressed) {

      int loc = mouseX + mouseY*img.width;
      // Get the R,G,B values from image
      float r,g,b;
      r = red (img.pixels[loc]);
      g = green (img.pixels[loc]);
      b = blue (img.pixels[loc]);
      c = color(r, g, b);
      background(c);
    
  }
}
