import React from "react";
import { Navbar } from "./components/navbar";
import { Productos } from "./views/productos/Productos";
import { Usuarios } from "./views/usuarios/Usuarios";
import { Ventas } from "./views/ventas/Ventas";
import { Home } from "./views/home/Home";
import { useNavbar } from "./hooks/useNavbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./views/login/Login";
import { Registro } from "./views/registro/Registro";
function App() {
  const {URLS, abrir, setAbrir, LINKSB} = useNavbar();

  return (
    <div>
      {/* <Navbar rutas={URLS} /> */}
      <Navbar rutas={URLS} abrir={abrir} setAbrir={setAbrir} linksB={LINKSB} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/prod' element={<Productos/>}/>
        <Route path='/usu' element={<Usuarios/>}/>
        <Route path='/vent' element={<Ventas/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regis' element={<Registro/>}/>

      </Routes>

    </div>
  )
}

export default App;

