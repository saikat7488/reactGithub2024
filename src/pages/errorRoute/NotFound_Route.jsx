import React, { useEffect } from "react";

export default function NotFound_Route() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return <div>This not found Route</div>;
}
