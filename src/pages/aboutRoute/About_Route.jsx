import React, { useEffect } from "react";

export default function About_Route() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return <div>This is About Route</div>;
}
