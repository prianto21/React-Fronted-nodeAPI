import React ,{useState,createContext,useReducer} from "react";
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
import Tagihan from "./Component/Hooks/fungsional/Tagihan";
// import Menu from './Component/class/Menu'
// import Parent from './Component/class/Parent'
// import Home from './Component/fungsional/Home'
export const KeranjangContext=createContext()
const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'tambah':
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal:state.hargasatuan + (state.hargasatuan* state.jumlah)
      };
    case 'kurang':
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal:(state.hargasatuan* state.jumlah) - state.hargasatuan
      };
    default:
      return state;
  }
};

const App = () => {
  const [value,setValue]=useState(0)
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
    
    <CartContext.Provider value={{value,setValue}}>

    
      <NavbarComponent />
      <KeranjangContext.Provider value={{KeranjangState:count , KeranjangDispatch:dispatch }}>
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
        <Route exact path="/tagihan" component={Tagihan} />
        {/* <Route exact path="/detail/:id" component={DetailComponent} /> */}
      </Switch>
      </KeranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
