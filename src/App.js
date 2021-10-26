import { Switch, Route, HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBar } from "./home/common/StaticComponents";
import { 
  HomePage,
  CetificatePage,
  ContactPage
} from "./home/sourcePages/index.js";
import './App.css';

const RouterSwitch = ({routes = []}) => {
    return routes.map(({ref, component}, i) => 
  <Route path={ref} component={component} key={i} exact={true}/>  
)}



export default function App() {

  // Statefull Variables
  let [ menuOptions, setMenuOptions ] = useState([]);

  // Functions
  let getMovibleOptions = () => {

    setMenuOptions(
      [
        { name:"Home", ref: "/Home", component: HomePage },
        { name:"Contact", ref: "/Contact", component: ContactPage },
        { name:"Certificates", ref: "/Certificates", component: CetificatePage },
      ]
    );

    console.log(menuOptions)

  }

  
  useEffect(()=> getMovibleOptions(), [], getMovibleOptions);

  return (
    <HashRouter>
      <div>
      {/* Nav */}
      <NavBar leftOptions={ menuOptions } />
      
      <main>
        <Switch>
          <RouterSwitch routes={menuOptions} />
        </Switch>
      </main>      
      </div>
    </HashRouter>
  );
}