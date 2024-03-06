import styles from "./Footer.module.css";
import { FaLinkedin, FaPhoneAlt, FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_label}>
                <p>&copy; 2024 Patrick Gunnar. Todos os direitos reservados.</p>
            </div>
            <div  className={styles.footer_author}>
                <div  className={styles.footer_label}>
                    <p>Desenvolvido por <strong>Patrick Gunnar</strong>: sua visão transformada em um site cativante.</p>
                </div>
                <div className={styles.footer_contact}>
                    <a
                        className={styles.footer_info}
                        href="https://wa.me/5533998356758"
                        target="_blank"
                    >
                        <FaPhoneAlt size={20} />
                        <span>(11) 9 1213-4476</span>
                    </a>
                    <a
                        className={styles.footer_info}
                        href="https://wa.me/5533998356758"
                        target="_blank"
                    >
                        <FaWhatsappSquare size={20} />
                        <span>WhatsApp disponível</span>
                    </a>
                </div>
                <a
                    className={`${styles.footer_info} ${styles.footer_linkedin}`}
                    href="https://www.linkedin.com/in/patrickgunnar/"
                    target="_blank"
                >
                    <FaLinkedin size={20} />
                    <span>Acesse meu Linkedin</span>
                </a>
            </div>
        </footer>
    );
}
