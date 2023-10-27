import VehicleEntrance from "views/VehicleEntrance.jsx";
import Saida from "views/Saida";
import NFe from "views/NFe";
import ListaNF from "components/Cards/ListaNF.js";
import PortariaContent from "components/Cards/PortariaContent.js"

let allowedRoute = []

const dashboardRoutes = [
  // {
  //   path: "/EntradaOld",
  //   name: "Old",
  //   component: EntradaOld,
  //   layout: "/admin",
  //   permissions: ["a"]
  // },
  {
    path: "/entrada",
    name: "Entrada",
    component: VehicleEntrance,
    layout: "/admin",
    permissions: ["a"]
  },
  {
    path: "/saida",
    name: "Saída",
    component: Saida,
    layout: "/admin",
    permissions: ["d"]
  },
  {
    path: "/nfe",
    name: "Verificar NFe",
    component: NFe,
    layout: "/admin",
    permissions: ["d"]
  },
  {
    path: "/ListaNF",
    name: "ListaNF",
    component: ListaNF,
    layout: "/admin",
    permissions: ["d"]
  },
  {
    path: "/PortariaContent",
    name: "PortariaContent",
    component: PortariaContent,
    layout: "/admin",
    permissions: ["a"]
  }

];

function checkRoutes(permissions) {
    dashboardRoutes.forEach(r => {
      if(permissions.some(p => r.permissions?.includes(p))){
        allowedRoute.push(r)
      }
    })
}

checkRoutes(["a", "d"])

export default allowedRoute;
