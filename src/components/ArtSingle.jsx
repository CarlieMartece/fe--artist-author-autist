import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArtSingle } from "../api";

export default function ArtSingle() {
    const { art_id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArtSingle(art_id).then((book) => {
          setData(book);
          setIsLoading(false);
        });
    }, [art_id]);
    console.log(data.art)

    return (
        <main>
            <p>art</p>
        </main>
    )
}