import Navbar from "./Componets/Navbar";
import AllData from "./Componets/AllData";
import Search from "./Componets/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Errorpage from "./Componets/Errorpage";
const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/alldata" element={<AllData />} />
          <Route exact path="*" element={<Errorpage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
