import logo from './logo.svg';
import './App.css';
import {List,Text} from "./List";
function sum(a,b) {
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multipli(a,b){
  return a*b;
}
function division(a,b){
  return a/b;
}
function App(){
  return(
  <>
  <div className="calculator">
  <p><strong>sum of two number is : </strong>{sum(30,3)}</p>
  <p><strong>subtraction of two number is : </strong>{subtract(30,3)}</p>
  <p><strong>multiplication of two number is : </strong>{multipli(30,3)}</p>
  <p><strong>division of two number is : </strong>{parseFloat(division(40,3).toFixed(2))}</p>
</div>
  <ol className="calculator" >
  <List/>
  </ol>
  <div className='box'>
    <Text/>
  </div>
  </>
);
}
export  {App};
