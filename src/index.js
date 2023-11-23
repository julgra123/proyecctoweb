/*import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
function Greeting(){
  return <h1>Hola mundo desde componente</h1>
}
function add(){
  var x=2;
  var y=3;
  return x+y;
}
root.render(
  <h1>Hola mundo!!!!!</h1>
);
//root.render(Greeting());

//root.render(Greeting());
root.render(
  <div>
    {Greeting()}
    {Greeting()}
    {Greeting()}
    {Greeting()}
  </div>
);
root.render(
  <div>
    <Greeting></Greeting>
    <Greeting></Greeting>
  </div>
);
//self closing
root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
);
root.render(<h1>La suma es {add()}</h1>)
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();*/
/*import React from "react";
import ReactDOM from "react-dom/client";

import {Greeting, UserCard} from "./Greeting"
import Product,{NavBar} from "./Product"

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <UserCard 
    name="Ryan Ray" 
    amount={3000}
    married={true}
    point={[99, 33.3, 22.2]}
    address={{street:"123 Main Street", city:"New York"}}
    />
    </>
)




root.render(
    <>
    <Greeting title="hola MUNDO" name="Joe"/>
    <Greeting title="hola MUNDO" name="Joe"/>
    <Greeting title="hola MUNDO" />
    <Greeting title="hola MUNDO" />
    <Greeting title="hola MUNDO" />
    </>
)
root.render(
    <div>
    <Greeting/>    
    <UserCard/>
    <Product/>
    <NavBar/>
    </div>

)
function Greeting(){
    function add(x,y){
        return x+y
    }
    return(
        <div>
            <h1>
                {add(4,7)}
            </h1>
        </div>
    )

}
//ESTRUCTURA DE DATOS
function Greeting(){
    const user={
         firstName:'Ryan',
         lastName:"Ray"
    }
    return (
        <div>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
        </div>
    )
 }
function Greeting(){
   const user={
        firstName:'Ryan',
        lastName:"Ray"
   }
   return <h1>{JSON.stringify(user)}</h1>
}
function Greeting(){
    const married=false
    return <h1>{married? "Casado":"Soltero"}</h1>
}
function Greeting(){
    const married=true
    if(married){
        return <h1>Estoy casado</h1>
    }
    else{
        return <h1>No estoy casado</h1>
    }
}
function Greeting(){
    const name="fazt"
    return <h1>{name}</h1>
}
function Greeting(){
    const name="fazt"
    const number=12345
    var a=1
    var b=2

    return <div>
        <h1>{name}</h1>
        <h1>{number}</h1>
        <h1>"a+b="{a=b}</h1>
        <h1>"a-b="{a-b}</h1>
    </div>
}

export function UserCard({name, amount, married, address }){
  console.log(name, amount, married, address)
  return (
      <div>
          <h1>{name}</h1>
          <h1>{amount}</h1>
          <h1>{married? "CASADO":"SOLTERO"}</h1>
          <ul>
              <li>address:{address.street}</li>
              <li>City:{address.city}</li>
          </ul>

      </div>
  )
}




export function Greeting({title, name="user"}){
  console.log(title, name)
  return <h1>{title}, {name}</h1>
}
export function Greeting(props){
  console.log(props)
  return <h1>{props.title},{props.name}</h1>
}
 export function Greeting(props){
  console.log(props)
  return <h1>{props.title}</h1>
}
export function Greeting(){
  function add(x,y){
      return x+y
  }
  return <h1>{add(10,30)}</h1>
}

export function UserCard(){
  return <h1>User Card</h1>
}

function Product(){
  return(
      <div>
          <h1>Producto</h1>
      </div>
  )
}
export default Product

export function NavBar(){
  return <nav>
      Navigation
  </nav>
}*/
//clase 3
/*import React , {useState} from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

let counter=0
function Counter(){

    const [counter, setCounter]=useState(0)
    
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>{
                setCounter(counter+1)
                }}>
                Sumar
            </button>
            <button onClick={()=>{
                setCounter(counter-1)
                }}>
                Restar
            </button>
        </div>
    )
}

root.render(
  <>
  <Counter/>
  </>
);*/
/*
import {Posts} from './Posts'
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))

const users = [
  {
    id:1,
    name:'ryan ray',
    image: 'https://robohash.org/usuario1'
  },
  {
    id:2,
    name:'kevin ray',
    image: 'https://robohash.org/usuario2'
  },
  {
    id:3,
    name:'jesus ray',
    image: 'https://robohash.org/usuario3'
  }
]
root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index} >
          <h1>{index}</h1>
            <h1>{user.name}</h1>
            <img src={user.image}/>
        </div>
      )
    })}
  </>
)*/
/*import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
    
      <div className="titulo">
        <h1>DATOS DEL ESTUDIANTE WEB II</h1>
      </div>
    <App/>
  </React.StrictMode>
)*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
