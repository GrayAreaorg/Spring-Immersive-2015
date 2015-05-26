class ClippingMask{
  
  PShape clippingShape;
  PGraphics clippingMask;
  PGraphics frame;
  ArrayList<Integer> vertX = new ArrayList<Integer>();
  ArrayList<Integer> vertY = new ArrayList<Integer>();
  
  IsoWrap iso;
  Point3d[] ptset;
  QuickHull3D hull;
  
  Movie movie;
  
  ClippingMask( PApplet sketch, String mov){
    //img = pimg;
    
    movie = new Movie(sketch, mov);    
    movie.loop();
    
    clippingShape = createShape();
    clippingMask = createGraphics(sketch.width, sketch.height, P3D);
    
    //img.resize(clippingMask.width, clippingMask.height);
    
    frame = createGraphics(sketch.width, sketch.height, P2D);
    
    //iso = new IsoWrap(sketch);
    ptset = new Point3d[0];
    hull = new QuickHull3D();
  }
  
  void drawImage(){
    //image(img, 0, 0, clippingMask.width,clippingMask.height);  
  }
  
  void drawClippingMask(){
    clippingMask.beginDraw();
    clippingMask.background(0);
    
    try{
      clippingMask.shape(clippingShape);
    }
    catch(Exception e){
      //  
    }
    clippingMask.endDraw();
    
    frame.beginDraw();
    frame.image(movie, 0, 0, frame.width, frame.height);
    frame.endDraw();
    
    frame.mask(clippingMask);
    
    image(frame, 0, 0);
    
    /*try{
      fill(255,0,0);
      noStroke();
      iso.plot(clippingShape);
    }
    catch(Exception e){
      //e.printStackTrace();  
    }*/
  }
  
  void addPointToShape(int x, int y){
    vertX.add(x);
    vertY.add(y);
    
    //iso.addPt(new PVector(x, y, random(0,1)));
    
    Point3d temp = new Point3d(x, y, random(0,1));
    println("got a temp point");
    ptset = (Point3d[]) PApplet.append(ptset, temp);
    println("appended the point to the array");
    
    
    
    try{
      hull.build (ptset);
      Point3d[] vertices = hull.getVertices();
      int[][] faceIndices = hull.getFaces();
      
      for (int i = 0; i < faceIndices.length; i++) {
        clippingShape.beginShape(QUAD_STRIP);
        clippingShape.fill(255);
        clippingShape.noStroke();
        for (int k = 0; k < faceIndices[i].length; k++) {
          Point3d v = vertices[faceIndices[i][k]];
          clippingShape.vertex((float)v.x, (float)v.y, (float)v.z);
        }
        clippingShape.endShape(CLOSE);
      }
    }
    catch(Exception e){
      //  
    }
    
    /*clippingShape.beginShape();
    clippingShape.fill(255);
    clippingShape.stroke(255);
    //clippingShape.noStroke();
    for(int i=0;i<vertX.size();i++){
      clippingShape.vertex(vertX.get(i), vertY.get(i));  
    }
    clippingShape.endShape(CLOSE);*/
  }
}
