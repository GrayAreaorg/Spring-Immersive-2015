import deadpixel.keystone.*;

Keystone ks; //this the main library object - must have
CornerPinSurface surface; //this is the surface you can
                          //  manipulate to fit a shape
PGraphics texture; //this is where you draw your 
                   //  image/video/animation/etc onto

void setup(){
  size(800, 600, P3D); //Keystone requires a 3d renderer, so specify one here
  
  ks = new Keystone(this); //initialize the Keystone library
  surface = ks.createCornerPinSurface(400,300,20); //create a new "surface" object
                                                   //  that the library will manage
  
  texture = createGraphics(400, 300); //create the texture surface that will
                                      //  map onto the "surface" object
  
}

void draw(){
  background(0);
  
  PVector surfaceMouse = surface.getTransformedMouse(); //since the surface gets
                                                        //  deformed, this will be
                                                        //  the working mouse coords
                                                        //  if you need to use them
  
  texture.beginDraw(); //start drawing onto the texture surface
  float mappedMouseY = map(surfaceMouse.y, 0, texture.height, 0, 255); //map the surface mouse
                                                                       //  coords into a color range
  float inverseMappedMouseY = map(mappedMouseY, 0, 255, 255, 0); //inverse the surface mouse
                                                                 //  mapped coords
  texture.background(mappedMouseY, 0, inverseMappedMouseY); //create a colored background
  texture.endDraw(); //end drawing onto the texture surface
  
  surface.render(texture); //now render the texture surface
                           //  onto the Keystone surface
}

/***KEYBOARD EVENTS***/
void keyPressed() {
  switch(key) {
  case 'c':
    // enter/leave calibration mode, where surfaces can be warped 
    // and moved
    ks.toggleCalibration();
    break;

  case 'l':
    // loads the saved layout
    ks.load();
    break;

  case 's':
    // saves the layout
    ks.save();
    break;
  }
}
/*********************/
