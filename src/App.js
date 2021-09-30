import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { Account } from './components/Account';
import  Status  from './components/Status'
function App() {
  return (
    <Account>
      <Status/>
      <Signup/>
      <Login/>
    </Account>
  );
}

export default App;
