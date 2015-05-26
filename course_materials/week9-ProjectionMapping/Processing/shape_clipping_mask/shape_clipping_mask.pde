import quickhull3d.*;
import ComputationalGeometry.*;
import processing.video.*;

/***~***/
/***~***/


ClippingMask clip;

void setup(){
  size(800,600,P3D);
  clip = new ClippingMask(this, "clip.mp4");
  smooth();
}

void draw(){
  
  background(0);
  
  clip.drawClippingMask();
  //clip.drawImage();
}

void mousePressed(){
  clip.addPointToShape(mouseX, mouseY);
}

void movieEvent(Movie m) {
  m.read();
}
