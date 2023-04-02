import './App.css';
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <TaskDisplay />
    </div>
  );
}

export default App;
