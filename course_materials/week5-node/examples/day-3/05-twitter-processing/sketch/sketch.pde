// Every 15 minutes, draw a circle to the screen and save
// the resulting frame to circle.png. This is the interval
// chosen by @int3rn3tdr3ctry. If we post much more
// frequently than that we'll get our account banned :(

int counter = 0;
int minutes = 60000;
void setup() {
  size(512, 512);
}

void draw() {
  int now = millis();

  if (counter == 0 || now - counter > 15 * minutes) {
    background(255);
    println(now);
    counter = now;

    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(256, 256, 128, 128);

    saveFrame("circle.png");
  }
}

