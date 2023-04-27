import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Archive from "./screens/Archive";
import Labels from "./screens/Labels";
import Notes from "./screens/Notes";
import Reminders from "./screens/Reminders";
import Trash from "./screens/Trash";

function App() {
  return (
    <div className="App">
      Welcome to the ToDo App
     
      <Routes>
        <Route path="/archives" element={<Archive/>}></Route>
        <Route path="/labels" element={<Labels/>}></Route>
        <Route path="/notes" element={<Notes/>}></Route>
        <Route path="/reminders" element={<Reminders/>}></Route>
        <Route path="/trash" element={<Trash/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
