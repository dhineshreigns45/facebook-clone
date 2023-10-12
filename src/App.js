import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const user="MS Dhinesh"
  return (
    <div>{
     user ?
     <Dashboard /> :
     <Login />}
    </div>
  );
}

export default App;
