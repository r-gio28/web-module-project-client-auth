import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Login = ()=> {
  return (
    <div className='login'>
      <form>
        <label>Username:
          <input
            type='text'
          />
        </label>
        <label>Password:
            <input
              type='password'
            />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>
    </div>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/" component={Login}/>
    </Switch>
    </Router>
  );
}

export default App;
