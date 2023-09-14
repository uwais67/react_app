
import './App.css';
// import Layout from './components/layout'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from "./pages/home.js"
import Register from "./pages/register.js"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/products" exact component={Products}/> */}
          <Route path="/register" element={<Register/>}></Route>
          {/* <Route path="/login" exact component={Login}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/service" exact component={Service}/>
          <Route path="/privacy" exact component={Privacy}/> */}
          </Routes>
      </Router>
    </div>
      
  );
}

export default App;
