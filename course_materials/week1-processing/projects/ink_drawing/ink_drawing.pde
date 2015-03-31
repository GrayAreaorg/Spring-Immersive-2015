/*

Ink Drawing Program!
- Jessica, Jeff, Harris, Zoe  

*/

// set brush size
int brushSize = 0;

 

void setup() {
  size(500,500);
  fill(0);
  noStroke();
  background(255);
}

void draw() {
 

  if (key == ']') {
    brushSize = brushSize + 1;
  }


  if (key =='[') {
   brushSize = brushSize - 1; 
  }
  
 
  if (brushSize > 300) {
  brushSize = brushSize - 1; 
 } else if (brushSize < 5){
  brushSize = brushSize + 1; 
 }
 

  
  // abort with click
  if (mousePressed) {
    background(255);
  }
  
  // key 1 turns opacity to 10%
  if (key == '1'){
   fill(0,25); 
  }
  
    // key 2 turns opacity to 50%
  if (key == '2'){
   fill(0,75); 
  }
  
      // key 3 turns opacity to 100%
  if (key == '3'){
   fill(0,225); 
  }
  

  ellipse(mouseX,mouseY,brushSize,brushSize);
  
}
