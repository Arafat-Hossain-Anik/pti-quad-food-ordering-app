import { useEffect, useState } from "react";

const useFetchData = () => {
    const [foods, setFoods] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
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