import { Route } from "../utils/types/Types";
import ErrorNotFound from "./404/404";
import HomePage from "./Home/Home";

// Base Array
const renderingRoutes: Array<Route> = [
  { route: "/", component: HomePage },
  { route: "*", component: ErrorNotFound },
];

// Exports
export default renderingRoutes;

// NavbarExport
export const NavRouter = renderingRoutes.map((x) => x.route);
