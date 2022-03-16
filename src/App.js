import './App.css';
import Feed from './Components/Feed/Feed';
import Sidebar from './Components/Sidebar/Sidebar';
import Widget from './Components/Widget/Widget';

function App() {
  return (
    <div className="app">
      
      <Sidebar/>
      <Feed/>
      <Widget/>

    </div>
  );
}

export default App;
