import Image from "next/image";
import Hero from "./component/Hero";
import Horizon from "./component/Horizon";
import Services from "./component/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Horizon />
      <Services />
    </main>
  );
}
