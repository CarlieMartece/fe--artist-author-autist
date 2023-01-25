import { useEffect, useState } from "react";
import { fetchArt } from "../api";


export default function Art() {
    const [artData, setArtData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArt().then((art) => {
            setArtData(art);
            setIsLoading(false);
        })
    }, []);
    console.log(artData);

}