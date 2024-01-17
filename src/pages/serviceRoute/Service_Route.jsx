import React, { useEffect } from "react";

export default function Service_Route() {
  useEffect(() => {
    document.title = "Service";
  }, []);

  return <div>This is Service Route</div>;
}
