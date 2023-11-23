import React, { useState } from 'react';

function User({ id, name, image }) {
  const [votes, setVotes] = useState(0);
  const [contador, setContador] = useState(1);
  const e=0;
  const handleVote = () => {
    setVotes(votes + 1);
    setContador(contador+1);

  };
if(contador>1){return (
    <div className="user">
      <h1>{name}</h1>
      <p>Votos: {votes}</p>
      <img src={image} alt={name}  style={{ width: '200px', margin: '10px' }} />
      
      <button onClick={handleVote}>Votar</button>
      <p>Votos: {votes}</p>
    </div>
  );}else
  {
    return (
      <div className="user">
        <img src={image} alt={name}  style={{ width: '200px', margin: '10px' }} />
        
        <button onClick={handleVote}>Votar</button>
        
      </div>
    );
  }
}

export default User;