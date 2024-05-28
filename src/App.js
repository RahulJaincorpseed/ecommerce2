import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./main/MainPage"
import MainDataPage from "./main/MainDataPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} >
        <Route path="/" element={<MainDataPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
