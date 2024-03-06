"use client";

import { useContent } from "@/hooks/useContent";
import { DataType } from "../fetcher/FetcherProvider";
import { useEffect } from "react";
import styles from "./Table.module.css";

interface TableProps {
    children: React.ReactNode;
    content: DataType | null;
}

export default function Table({ children, content }: TableProps) {
    const { setContent } = useContent();

    useEffect(() => {
        if (content) setContent(content);
    }, [content, setContent]);

    return (
        <main className={styles.table}>
            {children}
        </main>
    );
}
