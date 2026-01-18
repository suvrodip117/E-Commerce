import React, { useState, useEffect } from "react";
import axios from "axios";

function useUserDetailsGetRequest(url) {
  const [data, setData] = useState({ records: [] });
  const [error, setError] = useState(null);
  const username = sessionStorage.getItem("userName");
  useEffect(() => {
    if (username) {
      axios
        .get(url, { params: { username } })
        .then((response) => {
          const { records } = response.data;
          setData({ records });
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [url]);

  return { data, error };
}

export default useUserDetailsGetRequest;
