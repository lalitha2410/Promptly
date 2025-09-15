
import "./App.css";
import Chatpage from "./Components/Chatpage";
import Landingpage from "./Components/Landingpage";
import { BrowserRouter, Route,Routes} from 'react-router-dom';



function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      <Route path='/ChatPage' element={<Chatpage/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
