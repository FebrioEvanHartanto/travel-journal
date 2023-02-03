import './App.css';
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

function App() {

  const entries = data.map(item => {
    return(
    <Entry 
      coverImg={item.coverImg}
      location = {item.location}  
      googleMaps = {item.googleMaps}
      name = {item.name}
      date = {item.date}
      desc = {item.description}
      />
    )
  })


  return (
    <div className="App">
      <Header />
      {entries}
    </div>
  );
}

export default App;
