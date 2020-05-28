import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Sujon', 'Razzak', 'Salman', 'Sakib', 'Shuvo']
  
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'FDF Reader', price:'$9.99'}
  ]

  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
      <p> I am a React Person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      </ul>      
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name="Ruble" nayika="Moushumi"> </Person>
        <Person name="jasim" nayika="shabana"> </Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.website}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>

    </div>
  )
}
function Person(props){
  const personStyle={
    border:'2px solid yellow',
    margin:'10px'
  }

  return (
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of: {props.nayika}</h3>
    </div>
  )
}
export default App;
