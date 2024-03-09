import "./App.css";
import Header from"./Header";
import Footer from "./Footer";


function App() {
  return (
  <div>
    <div className='App-header'><Header/></div>
    <div>
    <div className="container">
      <div className="box1"><h2>Box1</h2></div>
      <div className="box2"><h2>Box2</h2></div>
      </div>
    </div>
      <div className='App-footer'><Footer/></div>    
  </div>
  );
}

// export default App;

// import "./App.css";
// import Calc from "./Calc";
// import Add from "./Add";
// import Students from "./Students";
// import Sqr from "./Sqr";
// import User from "./User";
// function App() {
//   const sqrfunction = (n) => {
//     return n*n
//   }
//   return (
//     <div>
//       <User name="John"/>
//      <Calc a={3} b={5}/>
//      <Add arr={[5,6,8]} />
//      <Students score={{'John':40,'Cathy':50}}/>
//      <Sqr a={5} fn={sqrfunction}/>
//     </div>
//   );
// }

// import "./App.css";
// import loginjohn from "./loginjohn.js";


export default App;