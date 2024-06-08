import logo from "./logo.svg";
import "./App.css";
import { myAddress } from "./import";
import MyCat from "./default";
// function App() {

function helloWorld() {
  return function () {
    return "hello world";
  };
}
let count = 8;
for (let i = 0; i < count; i++) {
  // i = i + 1;
  console.log(i);
}
function myCounter(a) {
  let current = a;
  return function () {
    return current++;
  };
}
const counter = myCounter(2);
console.log(counter());
console.log(counter());
console.log(counter());

const myHello = () => {
  const myFunction = helloWorld();

  return (
    <div>
      <MyCat />
      {myFunction()} <break />
      {myAddress()}
    </div>
  );
};

export default myHello;
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
// }

// export default createHelloWorld;
