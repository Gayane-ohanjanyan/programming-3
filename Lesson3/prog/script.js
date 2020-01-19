let side=20; 
var assets = {};

function makeImage(path) {
    var img = new Image();
    img.isReady = false;
    img.onload = function () {
        img.isReady = true;
    };
    img.src = path;
    return img;
}

let matrix = []; 
let rows = 40; 
let columns = 40; 

for (let y = 0; y < rows; y++) {
matrix[y] = []; 
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random() * 100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; 
}
if (a >= 20 && a < 50) {
matrix[y][x] = 1; 
}
else if (a >= 50 && a < 60) {
matrix[y][x] = 2; 
}
else if (a >= 60 && a < 80) {
matrix[y][x] = 3; 
}
else if (a >= 80 && a < 90) {
matrix[y][x] = 4; 
}
else if (a >= 90 && a < 100) {
matrix[y][x] = 5; 
}

   

}
}


var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var soldierArr =[];
var doctorArr =[];
var keyArr=[];


function setup() {
    createCanvas(rows*side, columns*side);
    background('#acacac');
    frameRate(5);

assets.tileset = makeImage('image.jpg');
//      grassImage = loadImage('image.jpg');
//  lady = loadImage('lady2.jpg');
//  fl = loadImage('yellow.png');
//  sold=loadImage('soldier.png');
// doc=loadImage('doctor.png');

    


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x,y,3);
                gishatichArr.push(gish);
                
            }
             else if (matrix[y][x] == 4) {
                var soldier = new Soldier(x,y,4);
                soldierArr.push(soldier);
                
            }
            else if (matrix[y][x] == 5) {
                var doctor = new Doctor(x,y,5);
                doctorArr.push(doctor);
                
            }

        }
    }
 
}








function draw() {
   
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                image(grassImage, x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                image(lady, x * side, y * side, side, side);
 

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

            
            else if (matrix[y][x] == 3) {
                image(fl, x * side, y * side, side, side);
            }
                 else if (matrix[y][x] == 4) {
                image(sold, x * side, y * side, side, side);
                
            }
               else if (matrix[y][x] == 5) {
                image(doc, x * side, y * side, side, side);
                
            }
        }
        
    }


     for(var i in grassArr){
       grassArr[i].mul();
   }

     for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }

     for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();
    }
       for (var i in soldierArr) {
        soldierArr[i].move();
        soldierArr[i].eat();
        soldierArr[i].mul();
        soldierArr[i].die();
        
        }

         for (var i in doctorArr) {
        doctorArr[i].move();
        doctorArr[i].die();
        doctorArr[i].eat();
        }
  
}


