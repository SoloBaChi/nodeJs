var rect = require('./rectangle')

function solveRect(l,b){
    console.log(`Solving for rectangle with l = ${l} and b = ${b}`)
    
    // if(l <= 0 || b <= 0){
    //     console.log(`the  dimensions of the rectangle l = ${l} and b = ${b} should be greater than zero`)
    // }
    // else{
    //     console.log(`the area of the rectangle is ${rect.area(l,b)} `)
    //     console.log(`the perimeter of the rectangle is ${rect.perimeter(l,b)} `)
    // }
    rect(l,b,(err,rectangle) => {
      if(err){
          console.log("ERROR: ", err.message);
      }
      else{
          console.log(`The area of rectangle of the rectangle of dimensions l = ${l} and  b = ${b} is ${rectangle.area()}`);
          console.log(`The perimeter of rectangle of the rectangle of dimensions l = ${l} and  b = ${b} is ${rectangle.perimeter()}`);
      }
    });

    console.log("This statement is after the call to rect");
}
solveRect(3,5);
solveRect(-2,6);
solveRect(6,2);
solveRect(3,0);