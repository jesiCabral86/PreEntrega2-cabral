import "./App.css";
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  return (
  <div className="app">
  <NavBar /> 
  <ItemListContainer greeting="Bienvenidos!!!"/>
  </div>
  );
}
      
export default App;
