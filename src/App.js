import React ,{useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContext } from "./CartContext";
import EditComponent from "./Component/class/EditComponent";
import FormTambahComponent from "./Component/class/FormTambahComponent";
import ListComponent from "./Component/class/ListComponent";
import AboutComponent from "./Component/fungsional/AboutComponent";
// import DetailComponent from "./Component/fungsional/DetailComponent";
import HomeComponent from "./Component/fungsional/HomeComponent";
import NavbarComponent from "./Component/fungsional/NavbarComponent";
import ClassComp from "./Component/Hooks/class/ClassComp";
import HookReducer from "./Component/Hooks/fungsional/HookReducer";
import Hooks from "./Component/Hooks/fungsional/Hooks";
import HookUseEffect from "./Component/Hooks/fungsional/HookUseEffect";
import ProductComp from "./Component/Hooks/fungsional/ProductComp";
// import Menu from './Component/class/Menu'
// import Parent from './Component/class/Parent'
// import Home from './Component/fungsional/Home'
const App = () => {
  const [value,setValue]=useState(0)
  return (
    <BrowserRouter>
    
    <CartContext.Provider value={{value,setValue}}>

    
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/mahasiswa" component={ListComponent} />
        <Route exact path="/mahasiswa/tambah" component={FormTambahComponent} />
        <Route exact path="/mahasiswa/edit" component={EditComponent} />
        <Route exact path="/kelas" component={ClassComp} />
        <Route exact path="/hooks" component={Hooks} />
        <Route exact path="/hookUseEffect" component={HookUseEffect} />
        <Route exact path="/produk" component={ProductComp} />
        <Route exact path="/reducer" component={HookReducer} />
        {/* <Route exact path="/detail/:id" component={DetailComponent} /> */}
      </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
