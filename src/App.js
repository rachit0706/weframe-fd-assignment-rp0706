import './App.css';
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import SideBar from './components/SideBar/SideBar';
import UsersPanel from './components/UsersPanel/UsersPanel';

function App() {
  return (
    <div className="App">
      <SideBar />
      <TaskDisplay />
      <UsersPanel />
    </div>
  );
}

export default App;
