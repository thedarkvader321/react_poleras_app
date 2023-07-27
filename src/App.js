import { BrowserRouter , Route, Routes } from "react-router-dom";
import { AgregarPolera } from "./components/AgregarPolera";
import { MostrarPolera } from "./components/MostrarPolera";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<AgregarPolera/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
