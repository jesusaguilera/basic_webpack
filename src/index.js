import "./assets/scss/styles.scss";
import leaf from "./assets/images/leaf.jpg";
import HelloWorld from "./components/HellowWorld";

const arr = [1, 2, 3];
const codeESNext = () => console.log(...arr);
console.log("Hola Mundo");
console.log(leaf);

const hello = new HelloWorld("Vanilla JS");

console.log(hello.greet())

codeESNext();
