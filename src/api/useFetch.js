import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}${url}`,
        // const response = await axios.get(`${url}`,
        );
        setData(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData()
  }, [url]);

    return { data, loading, error };
};

export default useFetch;
