let p1x, p1y, p1r, p1gerak
let p2x, p2y, p2r, p2gerak
function setup() {
  createCanvas(600, 400)
  p1x = 100
  p1y = height/2
  p1r = 50
  p1gerak = 10
  
  p2x = 100
  p2y = height/2 + 100
  p2r = 50
  p2gerak = 10
}


function draw() {
  background(210)

  fill(100, 250, 100)
  circle(p1x, p1y, p1r)

  fill(100, 100, 250)
  circle(p2x, p2y, p2r)

  if(p1x > width-100) {
    noLoop()
    textSize(30)
    text('player 1 win' , width/2, height/2)
}
  if(p2x > width-100) {
    noLoop()
    textSize(30)
    text('player 2 win' , width/2, height/2)
}
 }
function keyPressed() {
  if(key === 'd') p1x = p1x + p1gerak
  if(key === 'a') p2x = p2x + p2gerak
}
