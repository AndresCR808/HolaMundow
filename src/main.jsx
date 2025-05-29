import React from 'react'
import { createRoot } from 'react-dom/client'

// Esto simplifica la estructura de crear una instancia root y despues usar el root.render.
// Si se quisiera hacer de esta manera se abre la instancia igual a createRoot() y se quita el .render DESPUÉS, usaríamos la instancia.render

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render("COMO TAN MUCHACHO")

