import React, { useEffect } from "react";

export default function Development_Route() {
  useEffect(() => {
    document.title = "Development";
  }, []);

  return <div>This is Development Route</div>;
}
