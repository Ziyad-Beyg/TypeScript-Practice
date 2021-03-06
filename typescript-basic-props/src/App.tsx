import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first : "Ziyad",
    last : "Baig"
  }

  const namesList = [
    {
      first : "Bruce",
      last : "Wayne"
    },
    {
      first : "Clark",
      last : "Kent"
    },
    {
      first : "Princess",
      last : "Diana"
    }
  ]
  return (
    <div className="App">
        <Greet name='Ziyad' online={true}/>
        <Person name = {personName}/>
        <PersonList names={namesList} /> 
    </div>
  );
}

export default App;
