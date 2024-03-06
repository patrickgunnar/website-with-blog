import Image from "next/image";
import styles from "./SupportersContainer.module.css";
import imageToDisplay from "../../../public/sem-image.jpeg";

interface ContentType {
    id: string;
    name: string;
    image: any;
}

interface SupportersContainerProps {
    content: ContentType[] | null;
}

function SupporterContainer({ name, image }: ContentType) {
    return (
        <div className={styles.supporter_container}>
            <div className={styles.supporter_img_container}>
                <Image className={styles.supporter_img}
                    src={image ? image : imageToDisplay}
                    alt="Imagem do apoiador"
                    fill
                />
            </div>
            <div className={styles.supporter_name}>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default function SupportersContainer({
    content,
}: SupportersContainerProps) {
    return (
        <div className={styles.supporters_container}>
            {!content ? (
                <span className={styles.no_supporters}>
                    Sem apoiadores para ser apresentado.
                </span>
            ) : (
                content.map((item) => (
                    <SupporterContainer
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                    />
                ))
            )}
        </div>
    );
}
