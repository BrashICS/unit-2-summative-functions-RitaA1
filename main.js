/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/

document.getElementById("slope").addEventListener("click", slope_btn);
document.getElementById("length2").addEventListener("click", length_btn);
document.getElementById("midpoint").addEventListener("click", midpoint);
document.getElementById("rec_prism_volume").addEventListener("click", rect_prism_volume)
document.getElementById("rec_prism_area").addEventListener("click", rect_prism_area)
document.getElementById("sphere_volume").addEventListener("click", sphere_volume)
document.getElementById("sphere_area").addEventListener("click", sphere_area)
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("cylinder_volume").addEventListener("click", cylinder_volume)
document.getElementById("cylinder_area").addEventListener("click", cylinder_area)
document.getElementById("cone_volume").addEventListener("click", cone_volume)
document.getElementById("cone_area").addEventListener("click", cone_area)
document.getElementById("y_int").addEventListener("click", y_intercept);
document.getElementById("short_dist").addEventListener("click", shortest_dist);
document.getElementById("perp_bisector").addEventListener("click", perp_bisector);
document.getElementById("theta1").addEventListener("click", sin_theta);
document.getElementById("theta2").addEventListener("click", cos_theta);
document.getElementById("theta3").addEventListener("click", tan_theta);


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

// slope, length, and midpoint functions
function delta(a, b) {
    return(a - b)
}

function slope(x1, y1,x2,y2) {
    let slope = delta(y2, y1)/delta(x2, x1)
    return slope
}

function slope_btn() {
    let x1 =  Number(document.getElementById("x1").value)
    let y1 = Number(document.getElementById("y1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y2 = Number(document.getElementById("y2").value)
    document.getElementById("answer2").textContent = round_user(slope(x1, y1, x2, y2))
    console.log(round_user(slope(x1, y1, x2, y2))) 
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

function length(x1, x2, y1, y2) {
    return (Math.sqrt(delta(x2, x1)**2 + delta(y2,y1)**2))
}

function length_btn() {
    let x1 =  Number(document.getElementById("x1").value)
    let y1 = Number(document.getElementById("y1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y2 = Number(document.getElementById("y2").value)
    document.getElementById("answer2").textContent = round_user(length(x1, x2, y1, y2))
    console.log (round_user(length(x1, x2, y1, y2)))
}

// Geometry functions
function rect_prism_volume() {
    let l =  Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
    let volume = l*w*h
    document.getElementById("answer").textContent = round_user(volume)
    console.log(round_user(volume))
}

function rect_prism_area() {
    let l =  Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
    let area = 2*w*l + 2*l*h + 2*h*w
    document.getElementById("answer").textContent = round_user(area)
    console.log(round_user(area))
}

function sphere_volume() {
    let r =  Number(document.getElementById("radius").value)
    let volume = 4/3*Math.PI*r**3
    document.getElementById("answer").textContent = round_user(volume)
    console.log(round_user(volume))
}

function sphere_area() {
    let r =  Number(document.getElementById("radius").value)
    let area = 4*Math.PI*r**2
    document.getElementById("answer").textContent = round_user(area)
    console.log(round_user(area))
}

function cylinder_volume() {
    let r =  Number(document.getElementById("radius").value)
    let h = Number(document.getElementById("height").value)
    let volume = Math.PI*(r**2)*h
    document.getElementById("answer").textContent = round_user(volume)
    console.log(round_user(volume))
}

function cylinder_area() {
    let r =  Number(document.getElementById("radius").value)
    let h = Number(document.getElementById("height").value)
    let area = (2*Math.PI*r*h) + (2*Math.PI*(r**2))
    document.getElementById("answer").textContent = round_user(area)
    console.log(round_user(area))
}

function cone_volume() {
    let r =  Number(document.getElementById("radius").value)
    let h = Number(document.getElementById("height").value)
    let volume = Math.PI*(r**2)*(h/3)
    document.getElementById("answer").textContent = round_user(volume)
    console.log(round_user(volume))
}

function cone_area() {
    let r =  Number(document.getElementById("radius").value)
    let h = Number(document.getElementById("height").value)
    let area = (Math.PI*r)*(r + Math.sqrt((h**2)+ (r**2)))
    document.getElementById("answer").textContent = round_user(area)
    console.log(round_user(area))
}


// Quadratic functions
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
    let vertex =  `(${round_user(x)}, ${round_user(y_quad(a, b, c, x))})`
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
        document.getElementById("quadratic_output").textContent = ` It has no real zeros`
        console.log(`It has no real zeros`)
    }
    else {
        let zeros = `(${round_user((-1*b + Math.sqrt((b**2) -(4*a*c)))/(2*a))}, 0) (${round_user((-1*b - Math.sqrt((b**2) - (4*a*c)))/(2*a))}, 0)`
        document.getElementById("quadratic_output").textContent = zeros
        console.log(zeros)
    }
}

function y_intercept() {
    let c = Number(document.getElementById("c").value)
    document.getElementById("quadratic_output").textContent = c
    console.log(c)
}

// shortest distance between a point and line function
function shortest_dist() {
    let m =  Number(document.getElementById("m1").value)
    let b = Number(document.getElementById("b1").value)
    let x = Number(document.getElementById("x11").value)
    let y = Number(document.getElementById("y11").value)
    // finding the equation of the perpendicular line
    let m2 = -1/(m)
    let b2 = y - m2*x
    // equation of perpendicular line: y = m2*x + b2
    // equation of 1st line: y = mx + b
    // calculate POI of the 2 lines 
    let x2 = (b + (b2*-1))/((m*-1) + m2)
    let y2 = m2*x2 + b2
    // calculate lenght between the POI and the point of 2nd line
    let length = Math.sqrt((x2 - x)**2 + (y2 - y)**2)
    document.getElementById("answer3").textContent = round_user(length)
    console.log(round_user(length))
}

// perpendicular bisector function
function perp_bisector() {
    let x1 =  Number(document.getElementById("x1").value)
    let y1 = Number(document.getElementById("y1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y2 = Number(document.getElementById("y2").value)
    let m2 = ((x2 - x1)/(y2-y1))*-1
    let midpt_x = average(x1, x2)
    let midpt_y = average(y1, y2)
    let b1 = midpt_y - m2*midpt_x
    let equation = `y = ${m2}x + ${b1}`
    document.getElementById("answer2").textContent = equation
    console.log(equation)
}

// Trignometry functions
// sine inverse function
function sin_theta() {
    let opp =  Number(document.getElementById("opp").value)
    let hyp = Number(document.getElementById("hyp").value)
    let theta = (Math.asin(opp/hyp))*(180/Math.PI)
    document.getElementById("answer5").textContent = `${round_user(theta)}°`
    console.log(`${round_user(theta)}°`)
}

// cosine inverse function
function cos_theta() {
    let adj =  Number(document.getElementById("adj").value)
    let hyp = Number(document.getElementById("hyp").value)
    let theta = (Math.acos(adj/hyp))*(180/Math.PI)
    document.getElementById("answer5").textContent = `${round_user(theta)}°`
    console.log(`${round_user(theta)}°`)
}

// tan inverse function
function tan_theta() {
    let opp =  Number(document.getElementById("opp").value)
    let adj = Number(document.getElementById("adj").value)
    let theta = (Math.atan(opp/adj))*(180/Math.PI)
    document.getElementById("answer5").textContent = `${round_user(theta)}°`
    console.log(`${round_user(theta)}°`)
}