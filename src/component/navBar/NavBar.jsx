import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from './Navbar.module.scss';
import "./logo/logo.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo/Logo";
import AccountMenu from "./accountMenu/AccountMenu";
import CartMenu from "./cartMenu/CartMenu";
import SearchMenu from "./searchMenu/SearchMenu";
import { PATH } from "../../router/routes";
import { useAuth } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const NavBar = () => {
    const [showSidebarL, setShowSidebarL] = useState(false);
    const [showSidebarR, setShowSidebarR] = useState(false);
    const navigate = useNavigate();
    const { token, setToken } = useAuth();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowSidebarR(false);
                setShowSidebarL(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = (side) => {
        setShowSidebarL(side === "left" ? !showSidebarL : false);
        setShowSidebarR(side === "right" ? !showSidebarR : false);
    };

    const handleLogout = () => {
        setToken();
        navigate("/", { replace: true });
    };

    return (
        <div className={styles.navba_container}>
            {(showSidebarR || showSidebarL) && (
                <div className={styles.navba_container_closeWrapper} onClick={() => toggleSidebar("")}></div>
            )}


            <GiHamburgerMenu className={styles.navba_container_giHamburgerMenu} onClick={() => toggleSidebar("left")} />

            <div className={styles.navba_container_menu__container}>
                <Sidebar
                    type="left"
                    isOpen={showSidebarL}
                    toggleSidebar={() => toggleSidebar("left")}
                    links={[
                        { to: "#", label: "Productos" },
                        { to: "/store", label: "Tienda" },
                        { to: "#", label: "Categorias" },
                    ]}
                />
                <Sidebar
                    type="right"
                    isOpen={showSidebarR}
                    toggleSidebar={() => toggleSidebar("right")}
                    links={
                        token
                            ? [
                                { to: PATH.PROFILE, label: "Perfil", onClick: toggleSidebar },
                                { label: "Salir", onClick: handleLogout },
                            ]
                            : [
                                { to: PATH.LOGIN, label: "Iniciar sesion", onClick: toggleSidebar },
                                { to: PATH.SIGNIN, label: "Registrarse", onClick: toggleSidebar },
                            ]
                    }
                    extraLinks={[
                        { to: "#", label: "Asistencia" },
                        { to: "#", label: "Tienda" },
                        { to: "#", label: "Aplicacion movil de FC Tendencias" },
                    ]}
                />
            </div>
            <div className={styles.navba_container_logo__container}>
                <span><Logo/></span>
            </div>
            <div className={styles.navba_container_panel__container}>
                <SearchMenu />
                <CartMenu />
                <AccountMenu />
            </div>

            <FaRegUser className={styles.navba_container_faRegUser} onClick={() => toggleSidebar("right")} />

            <div className={styles.navba_container_landscape}  >
                <div className={styles.navba_container_landscape_object}></div>
            </div>


        </div>
    );
};



export default NavBar;
