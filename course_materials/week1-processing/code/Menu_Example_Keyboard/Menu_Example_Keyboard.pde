/* 

*/ 
int drawingSize = 10;

void setup() {
  size(500,500);
}

void draw() { 
  if (key == 'a') {
    fill(255);
  } else if (key == 'b') {
    fill(255,0,0);
  } else if (key == 'c') {
   fill(0,255,0); 
  } else {
    fill(0);
  }
  if (mouseX > width/2) {
   drawingSize++; 
  } else {
   drawingSize--; 
  }
    rect(mouseX,mouseY,drawingSize,drawingSize);
  
  
}










