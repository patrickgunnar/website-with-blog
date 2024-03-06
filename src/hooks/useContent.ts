import { DataType } from "@/Components/fetcher/FetcherProvider";
import { create } from "zustand";

interface ContentStore {
    content: DataType | null;
    setContent: (content: DataType) => void;
}

export const useContent = create<ContentStore>((set) => ({
    content: null,
    setContent: (content: DataType) => set({ content: content }),
}));
