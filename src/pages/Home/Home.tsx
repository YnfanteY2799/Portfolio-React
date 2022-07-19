import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/components";

export default function HomePage() {
  return (                 
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// brandox-portfolio.netliify.app
