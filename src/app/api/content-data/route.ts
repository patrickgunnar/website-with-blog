import axios from "axios";
import { Parser } from "xml2js";

function groupItems(objects: any[], groupSize: number): any[][] {
    return Array.from(
        { length: Math.ceil(objects.length / groupSize) },
        (_, index) => objects.slice(index * groupSize, (index + 1) * groupSize)
    );
}

export async function GET(request: Request) {
    const { data } = await axios.get("https://patrigunnar.wordpress.com/feed/");
    const parser = new Parser({ explicitArray: false, mergeAttrs: true });
    let parsedData: Record<string, any> | null = null;

    parser.parseString(
        data,
        (err: Error | null, result: Record<string, any> | undefined) => {
            if (!err && result && result.rss && result.rss.channel) {
                const items =
                    (result.rss.channel.item as Record<string, any>[]) || [];
                const content = items.map((item) => {
                    
                    return {
                    id: (item.pubDate as string)
                        .replace(/[\W_]/g, "")
                        .toLocaleUpperCase(),
                    title: item.title,
                    date: item.pubDate,
                    description: item["content:encoded"],
                    author: {
                        url: item["media:content"].url || item["media:content"][0].url,
                        name: item["dc:creator"]
                    },
                }});

                parsedData = {
                    title: result.rss.channel.title || "",
                    description: result.rss.channel.description || "",
                    content: groupItems(content, 12),
                };
            }
        }
    );

    return new Response(JSON.stringify(parsedData));
}
