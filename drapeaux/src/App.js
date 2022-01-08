import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = { <Home /> } />
        <Route path = '/about' element = { <About /> } />
        <Route path = '/:id' element = { <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
