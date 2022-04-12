import reactDom from "react-dom";
import {add, mult} from "./calc";
import React from "react";
import ReactDom from "react-dom"
import ("./index.css")
import("./Masai_Logo.jpg")
console.log(add(3, 7));
console.log(add(50,40))

ReactDom.render(
 <div><p>hello react</p></div>,
document.getElementById("root")
)




// npm install @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader


// let root = document.getElementById("root");
// let h1 = document.createElement("h1");
// h1.innerHTML = "Transformation in Education";
// h1.classList.add("text");
// let img = document.createElement("img");
// img.src="./src/Masai_Logo.jpg";
// img.classList.add("image")
// root.append(h1,img);