
PImage babyNeal;
void setup() {
  size(1024, 768);
  babyNeal = loadImage("baby_neal.png");
  babyNeal.loadPixels();
}

void draw() {
 
  image(babyNeal,mouseX,mouseY);
  fill(0);
  textSize(24);
  
  text("Baby Neal", width/2, int(height * .80));
  
}

void mousePressed() {
  
  save("babyNeal.tiff");
  
}
