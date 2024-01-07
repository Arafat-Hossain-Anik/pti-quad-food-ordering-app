import { useEffect, useState } from "react";

const useFetchData = () => {
    const [foods, setFoods] = useState("");
    const [error, setError] = useState("");
    // Fetch data from https redirect link
    useEffect(() => {
        fetch('https://pti-quad-technical.netlify.app/api/Item?page=1&pageSize=10')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => setError(error))
    }, [])
    return {
        foods,
        setFoods,
        error
    };
};

export default useFetchData;