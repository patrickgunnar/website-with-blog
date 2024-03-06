import styles from "./AboutContainer.module.css";
import noImageToDisplay from "../../../public/sem-image.jpeg";
import Image from "next/image";

function limitSize(input: string) {
    return input.length > 1150 ? input.slice(0, 1150) : input;
}

export default function AboutContainer({
    imageOne,
    imageTwo,
    paragraphOne,
    paragraphTwo,
}: {
    imageOne: any;
    imageTwo: any;
    paragraphOne: string;
    paragraphTwo: string;
}) {
    const formattedParagraphOne = paragraphOne
        ? limitSize(paragraphOne)
        : "Sem conteúdo para ser mostrado";
    const formattedParagraphTwo = paragraphTwo
        ? limitSize(paragraphTwo)
        : "Sem conteúdo para ser mostrado";

    return (
        <div className={styles.about_container}>
            <div className={styles.about_item_container_one}>
                <div className={styles.about_image}>
                    <Image
                        className={styles.about_img_styles}
                        src={imageOne ? imageOne : noImageToDisplay}
                        alt="Imagem do Container"
                        fill
                    />
                </div>
                <div
                    className={`${styles.about_paragraph} ${styles.paragraph_one}`}
                >
                    <p className={styles.paragraph}>{formattedParagraphOne}</p>
                </div>
            </div>
            <div className={styles.about_item_container_two}>
                <div
                    className={`${styles.about_paragraph} ${styles.paragraph_two}`}
                >
                    <p className={styles.paragraph}>{formattedParagraphTwo}</p>
                </div>
                <div className={styles.about_image}>
                    <Image
                        className={styles.about_img_styles}
                        src={imageTwo  ? imageTwo : noImageToDisplay}
                        alt="Imagem do Container"
                        fill
                    />
                </div>
            </div>
        </div>
    );
}
