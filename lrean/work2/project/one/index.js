let canvas = document.getElementById("canvas");
let context = canvas.getcontext("2d");
let isDrawing = false;
let startX, startY;
let penSize = document.querySelector(".pen_size.active").dataset;
let penSizeBtnList = document.querySelectorAll(".pen_size");
let penTypeBtnList = document.querySelectorAll(".pen_type");
let penColorBtnList = document.querySelectorAll(".pen_color");
let penButton = document.getElementById("pen");
let eraserButton = document.querySelector("#eraser");
let penColor = "#2d3436";
canvas.width = 500;
canvas.height = 500;
canvas.assEven