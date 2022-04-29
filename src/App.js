import './App.css';
import Folder from './components/folder';
import explorer from './data/folderData';

function App() {
  return (
    <div className="App">
      <Folder explorer={explorer}/>
    </div>
  );
}

export default App;
