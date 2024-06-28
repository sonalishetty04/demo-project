import React from "react";
import Link from "next/link";

function ConsultationBanner() {
  return (
    <Link href="/appointment">
      <img
        className="w-full h-auto"
        src="https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2Fsection%2FSection1_mobile.png&w=1920&q=75"
        alt="Banner"
      />
    </Link>
  );
}

export default ConsultationBanner;
