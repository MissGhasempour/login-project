import './App.css';
import Login from './Login';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import FormData from './FormData';
function App() {
  return (
    <div className="App">
      {/* <h1 style={{textAlign:"center", color:"grey"}}>Log in page</h1> */}
        <Router>
          <Routes>
            <Route path='/' element={<>
            <Login /> 
            </>} />
          <Route path='/data' element={<FormData />} />
          <Route path="*" element={<h1>page not found</h1>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
