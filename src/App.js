import Signup from './components/Signup';
import Login from './components/Login';
import { Account } from './components/Account';
import  Status  from './components/Status'
import Settings from './components/Settings';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function App() {
  return (
    <Account>
      <AppAppBar/>
      <Status/>
      <Login/> 

      {/* 
      <Signup/>
      <Settings/>
      */}
      <AppFooter />
    </Account>
  );
}

export default withRoot(App);
