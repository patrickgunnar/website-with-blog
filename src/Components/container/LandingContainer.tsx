import Image from "next/image";
import styles from "./LandingContainer.module.css";
import ladingImageToDisplay from "../../../public/lading-container.jpg";

export default function LandingContainer() {
    return <section className={styles.landing_container}>
        <div className={styles.lading_image}>
            <Image
                src={ladingImageToDisplay}
                alt="Imagem de entrada"
                className={styles.landing_image_element}
                fill
            />
        </div>
        <div className={styles.lading_info}>
            <div className={styles.landing_title}>
                Construindo Juntos o Futuro que Queremos: Transparência, Compromisso e Progresso.
            </div>
        </div>
    </section>;
}
