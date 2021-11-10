import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LocationUser from './components/locationUser';
import SearchHistory from './components/SearchHistory';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
                <Link to='/locationUser'>
                   <button className="app-btn-weather"> Weather </button>
                </Link>
                <Link to='/searchHistory'>              
                    <button className="app-btn-history">History</button>
                </Link>
                <Routes>
                    <Route exact path="/locationUser" element={<LocationUser/>}/> 
                    <Route exact path="/searchHistory" element={<SearchHistory/>}/>                   
                </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
