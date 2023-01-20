import { useEffect, useState } from "react";
import { fetchBooks } from "../api";


export default function Books () {
    const [bookData, setBookData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBooks().then((books) => {
            setBookData(books);
            setIsLoading(false);
        });
    }, []);
    console.log(bookData.books)

    return (
        <h2>Books</h2>
    )

};