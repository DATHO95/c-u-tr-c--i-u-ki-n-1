let a = diemKT = +prompt();

let b = diemGK = +prompt();

let c = diemCK = +prompt();

let tongket = ((a + b +c) / 3);

if (tongket >= 8.5) {
    alert("Loại Giỏi")
} else if (tongket < 8.5 && tongket >= 7) {
    alert("Loại Khá")
} else if (tongket < 7 && tongket >= 5) {
    alert("Loại TB")
} else {
    alert("Ở lại lớp")
}

