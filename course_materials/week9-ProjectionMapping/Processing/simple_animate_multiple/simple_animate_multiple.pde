float displayAnimationValue = 0; //this is what you use as your variable
float desiredAnimationValue; //set this value to animato TO

float displayAnimationValue2 = 0;
float desiredAnimationValue2;

void setup(){
  size(600,480); //set up a size for your window
  desiredAnimationValue = height; //set a default value for your animation end state
  desiredAnimationValue2 = width;
  fill(255,0,255);
  rectMode(CORNERS);
}

void draw(){
  background(0);
  
  //the smoothValue function will return a new "smoothed" value, so store it in your display value to draw the animation
  displayAnimationValue = smoothValue(displayAnimationValue, desiredAnimationValue, 20);
  displayAnimationValue2 = smoothValue(displayAnimationValue2, desiredAnimationValue2, 15);
  
  //draw a rectangle where the height will animate based on the above line of code
  rect(0, 0, displayAnimationValue2, displayAnimationValue);
  
  //if the height of the rectangle reaches the full height of the sketch, set your desired animation value to 0 to loop
  if(displayAnimationValue >= height - 1){
    desiredAnimationValue = 0;  
  }
  //likewise, if the rectangle height reaches 0, then set the desired animation value to the height of your window to continue looping
  else if(displayAnimationValue <= 1){
    desiredAnimationValue = height;  
  }
  
  //if the height of the rectangle reaches the full height of the sketch, set your desired animation value to 0 to loop
  if(displayAnimationValue2 >= width - 1){
    desiredAnimationValue2 = 0;  
  }
  //likewise, if the rectangle height reaches 0, then set the desired animation value to the height of your window to continue looping
  else if(displayAnimationValue2 <= 1){
    desiredAnimationValue2 = width;  
  }
}

//Abstract function for animating a value to another value
float smoothValue(float original, float desired, float interval){
  float diff = abs(original - desired) / interval;
  return original >= desired ? original - diff : original + diff;
}
