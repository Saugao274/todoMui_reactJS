import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Switch } from "@mui/material";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* <Switch> */}
      <Route element={<Home></Home>} path="/"></Route>
      <Route element={<Home></Home>} path="/home"></Route>
      <Route element={<Login></Login>} path="/login"></Route>
      <Route element={<Register></Register>} path="/register"></Route>
      <Route element={<Register></Register>} path="/register"></Route>
      <Route element={<NotFound />} path="/*"></Route>
      {/* </Switch> */}
    </Routes>
  );
}

export default App;
