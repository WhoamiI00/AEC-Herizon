import Image from "next/image";
import Hero from "./component/Hero";
import Horizon from "./component/Horizon";
import Services from "./component/Services";
import Serve from "./component/Serve";
import Process from "./component/Process";
import Deals from "./component/Deals";
export default function Home() {
  return (
    <main>
      <Hero />
      <Horizon />
      <Services />
      <Serve />
      <Process />
      <Deals />
    </main>
  );
}
