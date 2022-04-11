import './App.css';
import Heading from './Components/Heading';
import Oscar from './Components/Oscar';
import RequestStatus from './Components/RequestStatus';

function App() {
  return (
    <div className="App">
      <RequestStatus message='success'/>

      <Heading>HELLO WORLD </Heading>

      <Oscar>
        <Heading>
            Oscar Goes To Leonardo Dicaprio!
        </Heading>
      </Oscar>
    </div>
  );
}

export default App;
