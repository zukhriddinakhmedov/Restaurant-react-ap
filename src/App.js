import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNavBar from './components/MyNavBar';
import Home from './components/Home'
function App() {
  return (
    <div>
      {/*Prop is is a dynamic piece of info that is passed*/}
      <MyNavBar title="Restaurant" color="light" />

      <Home />
    </div>
  );
}

export default App;
