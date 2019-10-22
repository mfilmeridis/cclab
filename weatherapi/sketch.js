// A wind direction vector

var wind;
var position;
var input;

function setup(){
  createCanvas(500,500);

  var url = 'http://api.weatherstack.com/current?access_key=bea4af6c1510c5f3935b58dfd760c015&query=';
  loadJSON(url, gotWeather);

  var button = select('#submit');
  button.mousePressed(askWeather);
  input = select('#city');

  position = createVector(width/2, height/2);
  wind = createVector();
}

function draw(){
  background(197, 249, 244 );

  // Arrow pointing out the wind direction
  push();
  translate(32,height-32);
  //insert a variable
  rotate(wind.heading()+PI/2);
  // noStroke();
  // fill(255);
  // ellipse(0,0,48,48);

  // stroke(45,123,182);
  // strokeWeight(3);
  // line(0,-16,0,16);

  // noStroke();
  // fill(45,123,182);
  // triangle(0,-18,-6,-10,6,-10);

  pop();

  // Create a shape following the wind
  var r;
  var g;
  var b;
  var a;

  r = random(255); 
  g = random(100,200); 
  b = random(100); 
  a = random(200,255); 

  position.add(wind);

  noStroke();
  fill(r,g,b,a);
  ellipse(position.x, position.y, 50, 50);
  ellipse(position.x-200, position.y, 50, 50);
  ellipse(position.x-200, position.y-200, 50, 50);
  ellipse(position.x, position.y-200, 50, 50);
  ellipse(position.x-100, position.y-100, 50, 50);
  ellipse((position.x-100), (position.y+100), 50, 50);
  ellipse((position.x-200), (position.y+200), 50, 50);
  ellipse((position.x+100), (position.y-100), 50, 50);
  ellipse((position.x+200), (position.y-200), 50, 50);
  ellipse((position.x+300), (position.y-300), 50, 50);
  ellipse((position.x+200), (position.y), 50, 50);
  ellipse((position.x+100), (position.y+100), 50, 50);
  ellipse((position.x), (position.y+200), 50, 50);
  ellipse((position.x+200), (position.y+200), 50, 50);

  if(position.x > width) {
    position.x =0;
    // fill(random);
  }
  if(position.x < 0) position.x = width/2;
  if(position.y > height) position.y = height/2;
  if(position.y < 0) position.y =0;
}

function askWeather(){
  // Get data from weatherstack.com
  //var url = 'http://api.weatherstack.com/current?access_key=bea4af6c1510c5f3935b58dfd760c015&query=London';
  
  var api = 'http://api.weatherstack.com/current?access_key=bea4af6c1510c5f3935b58dfd760c015&query=';
  // var city = 'London';
  var url = api + input.value();

  loadJSON(url,gotWeather);
}

function gotWeather(weather){
  var angle = radians(Number(weather.current.wind_degree));
  var windmag = Number(weather.current.wind_speed);

  wind = p5.Vector.fromAngle(angle);
}