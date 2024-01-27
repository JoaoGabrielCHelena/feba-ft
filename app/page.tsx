import Image from "next/image";
import Header from "@/components/header";
import Banner from "@/sections/banner";
import QuemSomos from "@/sections/quemsomos";
import Contatenos from "@/sections/contatenos";
import Showcase from "@/sections/showcase";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Header />    
    <main>
      <Banner />
      <QuemSomos />
      <Contatenos />
      <Showcase />
    </main>
    <Footer />
    </>
  );
}
