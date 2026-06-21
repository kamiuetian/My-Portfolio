"use client";

import AOS from "aos";
import { useEffect } from "react";

function AosInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 60,
      delay: 120,
      duration: 800,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return null;
}

export default AosInit;
