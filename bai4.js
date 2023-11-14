let a = +prompt();

let b = +prompt();

let c = +prompt();

if (a > b) {
    if (a > c) {
        alert("a lớn nhất")
    } else {
        alert ("c lớn nhất")
    }
} else {
    if (b > c){
        alert("b lớn nhất")
    } else {
        alert("c lớn nhất")
    }
}