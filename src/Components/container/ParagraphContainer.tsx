import Image from "next/image";
import styles from "./ParagraphContainer.module.css";
import noImageToDisplay from "../../../public/sem-image.jpeg";

function limitSize(input: string) {
    return input.length > 1200 ? input.slice(0, 1200) : input;
}

export default function ParagraphContainer({
    image,
    paragraph,
}: {
    image: any;
    paragraph: string;
}) {
    const formattedParagraph = paragraph
        ? limitSize(paragraph)
        : "Sem conteúdo para ser mostrado";

    return (
        <div className={styles.paragraph_container}>
            <div className={styles.paragraph_image}>
                <Image
                    className={styles.paragraph_img_styles}
                    src={image ? image : noImageToDisplay}
                    alt="Imagem do Container"
                    fill
                />
            </div>
            <div className={styles.paragraph_wrapper}>
                <p className={styles.paragraph}>{formattedParagraph}</p>
            </div>
        </div>
    );
}
