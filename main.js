/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("slope").addEventListener("click", slope);
document.getElementById("length2").addEventListener("click", length_i);
document.getElementById("midpoint").addEventListener("click", midpoint);
document.getElementById("rec_prism_volume").addEventListener("click", rect_prism_volume)
document.getElementById("rec_prism_area").addEventListener("click", rect_prism_area)
document.getElementById("sphere_volume").addEventListener("click", sphere_volume)
document.getElementById("sphere_area").addEventListener("click", sphere_area)
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);


/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimal) {
    return Math.round(value * 10**decimal) / 10**decimal;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
  let d = Number(document.getElementById("rounding").value) 
  return round(value, d)
}
function delta(a, b) {
    return(a - b)
}

/**function slope(x1, y1, x2, y2) {
    return (delta(y2, y1)/delta(x2, x1))
} **/

    /**function slope2(x1, y1,x2,y2) {
        let slope = delta(y2, y1)/delta(x2, x1)
        return slope
    }**/

function slope() {
    let x1 =  Number(document.getElementById("x1").value)
    let y1 = Number(document.getElementById("y1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y2 = Number(document.getElementById("y2").value)
    let slope = (delta(y2, y1))/(delta(x2, x1))
 
    document.getElementById("answer2").textContent = round_user(slope)
    console.log(round_user(slope)) 
}


function average(n1, n2) {
    return ((n1 + n2)/2)   
 }

function midpoint() {
    let x1 =  Number(document.getElementById("x1").value)
    let y1 = Number(document.getElementById("y1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y2 = Number(document.getElementById("y2").value)
    let midpoint = `(${round_user(average(x1, x2))}, ${round_user(average(y1, y2))})`
    document.getElementById("answer2").textContent = midpoint
    console.log(midpoint)  
}

/**function length(x1, x2, y1, y2) {
    return (delta(x2, x1))**2 + delta(y2,y1)**2
}**/

function length_i() {
    let x1 =  Number(document.getElementById("x1").value)
    let y1 = Number(document.getElementById("y1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y2 = Number(document.getElementById("y2").value)
    let length = Math.sqrt(delta(x2, x1)**2 + delta(y2,y1)**2)
    document.getElementById("answer2").textContent = round_user(length)
    console.log (round_user(length))
}

// 7
function rect_prism_volume() {
    let l =  Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
    let volume = l*w*h
    document.getElementById("answer").textContent = volume
    console.log(volume)
}

function rect_prism_area() {
    let l =  Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
    let area = 2*w*l + 2*l*h + 2*h*w
    document.getElementById("answer").textContent = area
    console.log(area)
}

function sphere_volume() {
    let r =  Number(document.getElementById("radius").value)
    let volume = 4/3*Math.PI*r**3
    document.getElementById("answer").textContent = volume
    console.log(volume)
}

function sphere_area() {
    let r =  Number(document.getElementById("radius").value)
    let area = 4*Math.PI*r**2
    document.getElementById("answer").textContent = area
    console.log(area)
}




// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
   let y = a*(x**2) + b*x + c
   return y
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a =  Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let x = -b/(2*a)
    let vertex =  `(${x}, ${y_quad(a, b, c, x)})`
    document.getElementById("quadratic_output").textContent = vertex
    console.log(vertex)

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let a =  Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let discriminant = b**2 - 4*a*c
    if (discriminant < 0 ) {
        document.getElementById("quadratic_output").textContent = ` It has no zeros`
        console.log(`It has no zeros`)
    }
    else {
        /**let x1 = `(${(-b + Math.sqrt(b**2 -(4*a*c)))/(2*a)}, 0)`
        let x2 = `(${(-b - Math.sqrt(b**2 - (4*a*c)))/(2*a)}, 0)` **/
        let zeros = `(${(-1*b + Math.sqrt((b**2) -(4*a*c)))/(2*a)}, 0) (${(-1*b - Math.sqrt((b**2) - (4*a*c)))/(2*a)}, 0)`
        document.getElementById("quadratic_output").textContent = zeros
        console.log(zeros)
    }

}

function shortest_dist() {
    let m =  Number(document.getElementById("m").value)
    let b = Number(document.getElementById("b").value)
    let x = Number(document.getElementById("x").value)
    let y = Number(document.getElementById("x").value)
    let equation = -1*m*x + y - b
    let equation2 = -1*m*x + yy - b/(Math.sqrt(-1*m**2 + y**2)) 
}




