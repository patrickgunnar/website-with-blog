"use client";

import axios from "axios";
import Table from "../table/Table";
import { useEffect, useState } from "react";

export interface ContentType {
    id: string;
    title: string;
    date: string;
    description: string;
    author: {
        url: string;
        name: string;
    };
}

export interface DataType {
    title: string;
    description: string;
    content: ContentType[][];
}

interface FetcherProviderProps {
    children: React.ReactNode;
}

export default function FetcherProvider({
    children,
}: FetcherProviderProps) {
    const [data, setData] = useState<DataType | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const content = (await axios.get("/api/content-data")).data as DataType;

            if (content) setData(content);
        }

        fetch();
    }, [])

    return <Table content={data}>{children}</Table>;
}
