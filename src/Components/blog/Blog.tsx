"use client";

import { useContent } from "@/hooks/useContent";
import Post from "../post/Post";
import styles from "./Blog.module.css";
import { useEffect, useState } from "react";
import Paginate from "react-paginate";

export default function Blog() {
    const { content } = useContent();
    const [pageCount, setPageCount] = useState<number>(0);
    const [pageRange, setPageRange] = useState<number>(11);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setPageRange(2);
            } else {
                setPageRange(11);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return window.addEventListener("resize", handleResize);
    }, []);

    if (!content || content.content.length < 0) {
        return (
            <div className={styles.no_posts}>
                <span>Ainda não há publicações!</span>
            </div>
        );
    }

    const limit = content.content.length || 0;

    const handlePageChange = ({ selected }: { selected: number }) => {
        if (selected <= limit) setPageCount(selected);
    };

    return (
        <>
            <section className={styles.blog}>
                {content &&
                    content.content.length > 0 &&
                    content.content[pageCount].map((item) => {
                        return <Post key={item.id} content={item} />;
                    })}
            </section>
            <section className={styles.blog_paginator_container}>
                <Paginate
                    pageCount={limit}
                    onPageChange={handlePageChange}
                    breakLabel="..."
                    pageRangeDisplayed={pageRange}
                    marginPagesDisplayed={2}
                    previousLabel="< Previous"
                    nextLabel="Next >"
                    previousClassName={styles.blog_page_previous}
                    nextClassName={styles.blog_page_next}
                    pageLinkClassName={styles.blog_page}
                    containerClassName={styles.blog_paginator}
                    activeClassName={styles.selected}
                />
            </section>
        </>
    );
}
