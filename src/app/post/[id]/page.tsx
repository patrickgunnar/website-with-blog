import PageContainer from "@/Components/page/PageContainer";

export default function Post({ params }: { params: { id: string } }) {
    return <PageContainer posId={params.id} />;
}
