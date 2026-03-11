// ================================================================
//  client/src/hooks/useApi.js
//
//  Generic hook for fetching data from the Express backend.
//  Usage:
//    const { data, loading, error } = useApi("/api/skills");
// ================================================================

import { useState, useEffect } from "react";

export function useApi(endpoint) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((json) => { if (!cancelled) { setData(json); setLoading(false); } })
      .catch((err) => { if (!cancelled) { setError(err.message); setLoading(false); } });

    return () => { cancelled = true; };
  }, [endpoint]);

  return { data, loading, error };
}
