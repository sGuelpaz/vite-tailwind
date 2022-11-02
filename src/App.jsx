import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { Productos } from "./views/productos/Productos";
import { Usuarios } from "./views/usuarios/Usuarios";
import { Ventas } from "./views/ventas/Ventas";
import { Home } from "./views/home/Home";
import { useNavbar } from "./hooks/useNavbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const {URLS} = useNavbar();

  return (
    <div>
      <Navbar rutas={URLS} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/prod' element={<Productos/>}/>
        <Route path='/usu' element={<Usuarios/>}/>
        <Route path='/vent' element={<Ventas/>}/>
      </Routes>

    </div>
  )
}

export default App;

