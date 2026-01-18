import React, { useState, useEffect } from "react";
import axios from "axios";

function useGetRequestsFromDB(url) {
  const [data, setData] = useState({ records: [], numberofitemsincart: 0 });
  const [error, setError] = useState(null);
  const username = sessionStorage.getItem("userName");
  useEffect(() => {
    if (username) {
      axios
        .get(url, { params: { username } })
        .then((response) => {
          const { records, numberofitemsincart } = response.data;
          setData({ records, numberofitemsincart });
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [url]);

  return { data, error };
}

export default useGetRequestsFromDB;
