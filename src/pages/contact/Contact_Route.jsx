import React, { useEffect } from "react";

export default function Contact_Route() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return <div>This is contact Route</div>;
}
