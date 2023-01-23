import { useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { useEffect, useState } from "react";
import { fetchBookSingle } from "../api";
const { formatDate } = require("../utils.js");

export default function BookSingle() {

    const { book_id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBookSingle(book_id).then((book) => {
          setData(book);
          setIsLoading(false);
        });
      }, [book_id]);
    console.log(data.book)

}