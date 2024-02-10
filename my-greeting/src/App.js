import logo from './logo.svg';
import './App.css';

function App() {
  let mydate = new Date();
      let greet = "";
     let myStyle = {
       color:"green",
     }
     if(mydate.getHours() >= 1 && mydate.getHours() < 12){
       greet = "Good Morning!";
       myStyle.color = "green";
     }else if(mydate.getHours() >= 12 && mydate.getHours() < 19){
       greet = "Good Afternoon!";
       myStyle.color = "orange";
     }else{
       greet = "Good Night";
       myStyle.color = "Black";
     }
  return (<h1 className='head'>Hello Sir,<span style={myStyle}>{greet}</span></h1> );
};

export default App;
