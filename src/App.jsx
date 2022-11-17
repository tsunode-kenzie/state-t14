import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Profile } from './components/Profile';
import { Register } from './components/Register';

export const App = () => {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <h1>Contador</h1>

      <Register setUsers={setUsers} />

      {
        users.map((user, index) => 
          <Profile key={index} name={user.name} age={user.age} />
        )
      } 

      <Counter />
    </div>
  );
};

// SPA

// tags todas são fechadas
// for => htmlFor
// class => className

// props => atributos da Tag html
// children => conteúdo de Tag