import './App.css';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Home from './components/Home';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user? <Home/> :<Login/>}
    </div>
  );
}

export default App;
