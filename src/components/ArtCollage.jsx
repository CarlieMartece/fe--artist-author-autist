import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArtCollage } from "../api";
const { formatDate } = require("../utils.js");

export default function ArtCollage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { threeWords} = useParams();
    console.log(threeWords)

    useEffect(() => {
        fetchArtCollage(threeWords).then((art) => {
          setData(art);
          setIsLoading(false);
        });
    }, [threeWords]);

    if (!isLoading) {
        console.log(data)
    }

    return (
        <h2>collage</h2>
    )
}