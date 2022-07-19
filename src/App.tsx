import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import renderingRoutes from "./pages/Pages";
import "./css/index.css";

// APP ROOT

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderingRoutes.map(
          ({ route, component: Component, childs = [] }, parentIndex) =>
            childs.length < 1 ? (
              <Route path={route} element={<Component />} key={parentIndex} />
            ) : (
              <Route
                path={route}
                element={<Component />}
                key={parentIndex}
                children={childs.map(
                  ({ route: childRoute, component: ChildComponent }, index) => (
                    <Route
                      path={childRoute}
                      element={<ChildComponent />}
                      key={index}
                    />
                  )
                )}
              />
            )
        )}
      </Routes>
      <Toaster position="top-right" reverseOrder={true} />
    </BrowserRouter>
  );
}
