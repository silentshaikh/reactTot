import logo from './logo.svg';
import './App.css';
import  Match  from './Match';
import  NotMatch  from './NotMatch';
function Result({x,y,z}) {
  return(
    x==y && x==z ? <Match x={x} y={y} z={z}/> : <NotMatch x={x} y={y} z={z}/>
  );
}
function App() {
  return (
    <>
      <h1 className='head'>Hello World!</h1>
      <Result x='🥭' y='🥭' z='🥭'/>
      <Result x='🍍' y='🥭' z='🥭'/>
      <Result x='🍍' y='🥭' z='🥭'/>
      <Result x='🍍' y='🥭' z='🏏'/>
    </>
  );
}

export default App;
