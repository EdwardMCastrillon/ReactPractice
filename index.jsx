import React from 'react'
import EmpleadoList from './components/empleado-list'

let empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "image1.png" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "image2.png" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "image3.png" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "image4.png" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "image5.png" },
]

React.render(<EmpleadoList listado={ empleados } />, document.getElementById('application'))
