import { getByDisplayValue } from "@testing-library/react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Details } from "./Components/Card/Detail";
import { CartDetails } from "./Components/Cart/CartDetails";
import { ChooseCompare } from "./Components/Compare/ChooseCompare";
import { SearchPage } from "./Components/Search/SearchPage";
import { Login } from "./Components/LoginSignUp/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/compare"
          element={<ChooseCompare></ChooseCompare>}
        ></Route>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/products/:id" element={<Details />}></Route>
        <Route path="/cart" element={<CartDetails />}></Route>
        <Route path="/search" element={<SearchPage></SearchPage>}></Route>
        <Route
          path="/search/:search"
          element={<SearchPage></SearchPage>}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
