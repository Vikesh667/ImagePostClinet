import logo from './logo.svg';
import './App.css';
import CreateComponent from './component/CreateComponent';
import { Route,Routes } from 'react-router-dom';
import ShowComponent from './component/ShowComponent';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <CreateComponent/>}/>
        <Route path='/show' element={ <ShowComponent/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
