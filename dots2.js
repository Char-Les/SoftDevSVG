/*
  Charles Weng
  SoftDev2 pd7
  #07: Connect the Dots
  2018-3-1
*/



/*
  ==============================================================================
                                  Variables/Initiation
  ==============================================================================
*/

// the svg element
var pic = document.getElementById('vimage');
// old point (x,y)
var old = [0,0];
// new graph?
var start = true;



/*
  =======================================================================
                                  Functions
  =======================================================================
*/

// clear function
const clear = function(){
  start = true;
  // while there are children, remove a child
  while(pic.children.length)
    pic.removeChild();
}

// draw function
const draw = function(e){
  e.preventDefault();

  // if its not a new graph, draw a line to the old circle
  if(!start){
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", old[0]);
    line.setAttribute("y1", old[1]);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "black");
    line = pic.appendChild(line);
  }

  // draw circle
  var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cir.setAttribute("cx", e.offsetX);
  cir.setAttribute("cy", e.offsetY);
  cir.setAttribute("r", 10);
  cir.setAttribute("fill", "red");
  cir.setAttribute("stroke", "blue");
  cir = pic.appendChild(cir);

  // update variables
  old[0] = e.offsetX;
  old[1] = e.offsetY;
  start = false;
}



/*
  =======================================================================
                                  Button Stuff
  =======================================================================
*/

// add event listenters
document.getElementById("clear").addEventListener("click", clear);
pic.addEventListener("click", draw);
