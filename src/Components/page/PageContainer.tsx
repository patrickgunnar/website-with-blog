"use client";

import { useContent } from "@/hooks/useContent";
import styles from "./PageContainer.module.css";
import { useEffect, useState } from "react";
import { ContentType } from "../fetcher/FetcherProvider";
import parseHTML from "html-react-parser";
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";
import Post from "../post/Post";
import { FaCircleUser } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PageContainerProps {
    posId: string;
}

export default function PageContainer({ posId }: PageContainerProps) {
    const router = useRouter();
    const { content } = useContent();

    const [currentPost, setCurrentPost] = useState<ContentType | null>(null);
    const [otherPost, setOtherPost] = useState<ContentType[] | null>(null);

    useEffect(() => {
        const items = content && content.content ? content.content : [];

        for (let item of items) {
            const other: ContentType[] = [];
            let current: ContentType | null = null;

            for (let post of item) {
                if (post.id === posId) {
                    current = post;
                } else {
                    other.push(post);
                }
            }

            if (current) {
                setCurrentPost(current);
                setOtherPost(other);
            }
        }
    }, [content, posId]);

    let parsedDate: Date;
    let formattedDate: string = "";

    if (currentPost && currentPost.date) {
        parsedDate = parse(currentPost.date, "EEE, dd MMM yyyy HH:mm:ss XXXX", new Date());
        formattedDate = format(parsedDate, "EEEE, dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });
    }

    return (
        <div className={styles.page_container}>
            <div className={styles.page_back_container}>
                <button className={styles.page_back_btn} onClick={() => router.push("/")}>
                    <IoArrowBack size={23} />
                    <span className={styles.page_back_label}>Voltar</span>
                </button>
            </div>
            <section className={styles.page_container_post}>
                <div className={styles.title}>
                    <span>{currentPost?.title}</span>
                </div>
                <div className={styles.date}>
                    <span>{formattedDate}</span>
                </div>
                <div className={styles.author}>
                    <span className={styles.author_img}>
                        {currentPost?.author.url ? (
                            <Image
                                loader={({ src }) => src}
                                src={currentPost?.author.url}
                                alt="Imagem do Autor"
                                unoptimized
                                height={60}
                                width={60}
                            />
                        ) : <FaCircleUser size={60} />}
                    </span>
                    <span className={styles.author_name}>{currentPost?.author.name}</span>
                </div>
                <div className={styles.description}>
                    {parseHTML(currentPost?.description || "")}
                </div>
            </section>
            <div className={styles.label}>
                <span>Outros Artigos e Novidades</span>
            </div>
            <div className={styles.page_blog_wrapper}>
                {
                    !otherPost || (otherPost && otherPost.length <= 0) ? (
                        <div className={styles.no_posts}>
                            <span>Sem outras publicações!</span>
                        </div>
                    ) : (
                        <section className={styles.page_container_blog}>
                            {otherPost.map((post) => {
                                    return <Post key={post.id} content={post} />
                            })}
                        </section>
                    )
                }
            </div>
        </div>
    );
}
