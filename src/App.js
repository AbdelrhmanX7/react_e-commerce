import BodyComponents from "./Components/Body_Components/Body_Components";
import Header from "./Components/Header_Componenets/Header";
import DataContext from "./DataContext";

function App() {

  return (
    <div>
      <DataContext>
        <Header />
        <BodyComponents />
      </DataContext>
    </div>
  )
}

export default App;
