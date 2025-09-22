
import Buttons from "./Components/Buttons";
import OutPut from "./Components/Output";
import Historys from "./Components/Historys";
import { CalContextProvider } from "./Context/Calculater";


function App() {
  // console.log('<App /> rendered');
  return (
    <>
    <header>
       
      <main>
        <CalContextProvider>
        <div className="box">
            <Historys/>
            <h1>Calculater</h1>
            <OutPut/>
            <Buttons/>
        </div> 
          </CalContextProvider>

      </main>
    </header>      
    </>
  );
}

export default App;






