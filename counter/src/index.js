import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let AddCounter = (props) => {
  return <div>
    <h2>{props.count}</h2>
    <button onClick={() => props.increment()}>Increment</button>
    <button onClick={() => props.decrement()}>Decrement</button>
    <button onClick={() => props.deleteCounter()}>Delete Counter</button>
  </div>
}



let CounterComponent = () => {
  const [counts, setCounts] = React.useState([0]);

  let increment = (reqinx) => {
    let newCountsArr=counts.map((ele, indx) => (indx === reqinx) ? ele + 1 : ele);
    setCounts(newCountsArr);
  }

  let decrement = (reqinx) => {
    let newCountsArr=counts.map((ele, indx) => (indx === reqinx) ? ele - 1 : ele);
    setCounts(newCountsArr);
  }

  let deleteCounter=(ind)=>{
    let newCountsArr=[...counts];
    //let newCountsArr=counts.slice(0);
    newCountsArr.splice(ind,1);
    setCounts(newCountsArr);
  }

  let addCounts=()=>{
    let newCounts=counts.concat([0]);
    setCounts(newCounts);
  }


  return <div style={{ textAlign: "center" }}>
    {counts.map((ele, index) =>
      <AddCounter count={ele} increment={() => increment(index)}  decrement={()=>decrement(index)} deleteCounter={()=>deleteCounter(index)}/>)}
    <br />
    <br />
    <button onClick={addCounts}>Add Counter</button>

  </div>
}



ReactDOM.render(
  <React.StrictMode>
    <CounterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
