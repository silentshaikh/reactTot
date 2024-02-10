import logo from './logo.svg';
import './App.css';
import { MovieList } from './Adata';
function Card(props){
  return(
 <>
    <div className="movieCard">
  <p className="time"></p>
  <img src={props.imgsrc} alt="movie" />
 <div className="mtitle">
  <h2>{props.title}</h2>
  <p>{props.lang}</p>
  <p className="gen">{props.gen} </p>
 </div>
</div>
 </>
);
}
function App(){
  return(
    <>
      <h1>Movie List</h1>   
       <div className="container">
   {MovieList.map((e,index) => {
     return( <Card key={index} imgsrc={e.img}
   title={e.name}
   lang={e.lang}
   gen={e.gen}
 />)
   })}
    </div>
    </>
  );
}

export default App;
