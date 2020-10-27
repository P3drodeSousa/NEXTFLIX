import { useEffect, useState } from "react";

export default function selectMovie(id) {
  const [selectedMov, setSelectedMovie] = useState("");
  const [opened, setOpen] = useState(false);

  useEffect(() => {
    if (!id) {
      setOpen(false);
      return;
    }
    setSelectedMovie(id);
    setOpen(true);
  }, [id]);

  return { selectedMov, opened };
}
