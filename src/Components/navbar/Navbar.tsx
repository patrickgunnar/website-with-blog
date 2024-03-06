"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import { FaHome, FaUser, FaThLarge, FaBars } from "react-icons/fa";
import { GiVineFlower } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import HorizontalLine from "../hr/HorizontalLine";

function NavbarElementsMenu({ pathname, onMobileClose }: { pathname: string; onMobileClose: () => void; }) {
    const router = useRouter();

    const push = (url: string) => {
        router.push(url);
        onMobileClose();
    }

    return (
        <ul className={styles.navbar_ul}>
            <li 
                className={`${styles.navbar_li} ${pathname === "/" ? styles.navbar_selected : ""}`}
                onClick={(() => push("/"))}
            >
                <FaHome />
                <span>Home</span>
            </li>
            <li 
                className={`${styles.navbar_li} ${pathname === "/sobre" ? styles.navbar_selected : ""}`}
                onClick={(() => push("/sobre"))}
            >
                <FaUser />
                <span>Sobre Mim</span>
            </li>
            <li 
                className={`${styles.navbar_li} ${pathname === "/projetos" ? styles.navbar_selected : ""}`}
                onClick={(() => push("/projetos"))}
            >
                <FaThLarge />
                <span>Meus Projetos</span>
            </li>
        </ul>
    );
}

function NavbarLogo() {
    return (
        <div className={styles.title} onClick={() => window.location.href = "/"}>
            <span>Website With Blog</span>
            <GiVineFlower size={40} />
        </div>
    );
}

function MobileElementsMenu({ pathname, onClose }: { pathname: string; onClose: () => void; }) {
    return (
        <div className={styles.mobile_menu}>
            <IoClose size={40} className={styles.mobile_closing} onClick={onClose} />
            <NavbarLogo />
            <HorizontalLine />
            <NavbarElementsMenu pathname={pathname} onMobileClose={onClose} />
        </div>
    )
}

export default function Navbar() {
    const pathname = usePathname();

    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleOpenCloseMobileMenu = () => {
        setIsMobileMenuOpened((prev) => !prev);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.desktop}>
                <NavbarElementsMenu pathname={pathname} onMobileClose={() => {}} />
                <NavbarLogo />
            </div>
            <div className={styles.mobile}>
                <NavbarLogo />
                <FaBars size={28} onClick={handleOpenCloseMobileMenu} />
            </div>
            {isMobileMenuOpened && <MobileElementsMenu pathname={pathname} onClose={handleOpenCloseMobileMenu} />}
        </nav>
    );
}
