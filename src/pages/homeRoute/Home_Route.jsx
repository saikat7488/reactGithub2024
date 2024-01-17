import React, { useEffect } from "react";

export default function Home_Route() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return <div>This is Home Route</div>;
}
