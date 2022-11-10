import React, { useState } from "react";
export const useNavbar = () => {
    const URLS = [
            ['Inicio', '/'],
            ['Productos', '/prod'],
            ['Usuarios', '/usu'],
            ['Ventas', '/vent'],
    ]

    const [abrir, setAbrir] = useState(false);
    return {
        URLS,
        abrir,
        setAbrir
  }
}
