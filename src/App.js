import "assets/css/app.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "pages/HomePage";



function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
