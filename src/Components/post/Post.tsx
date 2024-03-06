import parseHTML from "html-react-parser";
import * as cheerio from "cheerio";
import { ContentType } from "../fetcher/FetcherProvider";
import { useRouter } from "next/navigation";
import { parse, format } from "date-fns";
import striptags from "striptags";
import styles from  "./Post.module.css";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import noImageToDisplay from "../../../public/sem-image.jpeg";

interface PostProps {
    content: ContentType;
}

function FigureContent({ figure }: { figure: string | null }) {
    return <>{figure ? parseHTML(figure, {
        replace: (domNode) => {
            if (domNode.type === "tag" && domNode.name === "img") {
                delete domNode.attribs.width;
                domNode.attribs.height;
            }
        }
    }) : (
        <Image
            src={noImageToDisplay}
            alt="Nenhuma imagem na publicação"
            height={218}
        />
    )}</>;
}

function ParagraphContent({ paragraph }: { paragraph: string | null }) {
    return <>{paragraph ? <p>{striptags(paragraph)}</p> : <p>Sem conteúdo para ser mostrado.</p>}</>;
}

export default function Post({ content }: PostProps) {
    const router = useRouter();
    const { id, title, date, description } = content;
    const $ = cheerio.load(description);

    const figure = $("figure").first();
    const p = $("p").first();
    
    let parsedDate: Date;
    let formattedDate = "";

    if (date) {
        parsedDate = parse(date, "EEE, dd MMM yyyy HH:mm:ss XXXX", new Date());
        formattedDate = format(parsedDate, "EEEE, dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });
    }

    const push = (id: string) => {
        router.push(`/post/${id}`);
    };

    return (
        <div className={styles.post} onClick={() => push(id)}>
            <FigureContent figure={figure.html()} />
            <div className={styles.post_title}>{title}</div>
            <span className={styles.post_date}>{formattedDate}</span>
            <div className={styles.post_container}>
                <ParagraphContent paragraph={p.html()} />
            </div>
        </div>
    );
}
