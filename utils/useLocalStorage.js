import { useEffect, useState } from "react";

export default function useLocal() {
  const [watchlisted, setWatchListed] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("watchlist"));
    setWatchListed(items);
  }, []);

  return [watchlisted, setWatchListed];
}
