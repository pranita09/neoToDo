import "./App.scss";
import { Routes, Route } from "react-router-dom";

import { Archive, Labels, Notes, Reminders, Trash } from "./screens";
import Header from "./Layout/Header";

function App() {
  return (
    <div className="App">
    <Header />
      Welcome to the ToDo App
      <Routes>
        <Route path="/archives" element={<Archive />}></Route>
        <Route path="/labels" element={<Labels />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/reminders" element={<Reminders />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
      </Routes>
    </div>
  );
}

export default App;
