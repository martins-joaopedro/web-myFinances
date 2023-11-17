import { useEffect, useState } from "react";
import { api } from "../Services/api";

export const useFetch = ( url ) => {

    console.log(url)

    const [data,setData] = useState({});
    const [isFetching,setIsFetching] = useState(true);

    useEffect(() => {
        api.get(url)
        .then((response) => {
            setData(response.data)
        })
        .finally(() => {
            setIsFetching(false)
        })
    }, [])

    return { data, isFetching }
}   