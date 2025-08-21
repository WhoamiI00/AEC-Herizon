"use client";

import { useState, useEffect } from "react";
import Hero from "./component/Hero";
import Horizon from "./component/Horizon";
import Services from "./component/Services";
import Serve from "./component/Serve";
import Process from "./component/Process";
import Deals from "./component/Deals";
import LoadingState from "./component/LoadingState";
import LoadingPage from "./component/LoadingPage";
import Navbar from "./component/Navbar";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingExample, setShowLoadingExample] = useState(false);

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleLoadingExample = () => {
    setShowLoadingExample(!showLoadingExample);
  };

  if (isLoading) {
    return <LoadingPage message="" />;
  }

  return (
    <main >
      <section className="bg-gradient-to-b from-[#D8DDED] to-[#E1E8FF]">
      <Navbar/>
      <Hero />
      <Horizon />
      </section>
      <section className="bg-gradient-to-b from-[#D8DDED] to-[#E1E8FF]">
      <Services />
      <Serve />
      <Process />
      <Deals />
      </section>
    </main>
  );
}
