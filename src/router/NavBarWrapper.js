import { Outlet } from "react-router-dom";
import NavBar from "../component/navBar/NavBar";
const NavBarWrapper = () => {

  return (
    <>
        <NavBar />
        <div className="outlet">
          <Outlet />
        </div>
    </>
  )

};

export default NavBarWrapper;