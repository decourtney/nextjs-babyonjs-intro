"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SceneViewer = dynamic(() => import("./components/SampleScene"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true));

  return (
    <main className="h-screen mx-auto">
      {loaded && <SceneViewer />}
    </main>
  );
}
