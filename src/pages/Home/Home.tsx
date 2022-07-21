import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../../components/components";

export default function HomePage() {
  // Statefull-variables
  const [isActive, setIsActive] = useState(false as boolean);

  // Constants
  const _NAME = "YYKD";

  // Functions
  function openSidebar() {
    setIsActive(!isActive);
  }

  return (
    <>
      <Navbar appName={_NAME} isActive={isActive} actionChanger={openSidebar} />
      <Sidebar isActive={isActive}/>
      <div
        className={`flex overflow-hidden bg-white pt-16 ${
          isActive ? "pl-64" : ""
        }`}
      >
        <Outlet />
      </div>
    </>
  );
}
