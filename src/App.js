import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeList from './components/EmployeeList';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
