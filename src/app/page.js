"use client"

import Head from "next/head";
import Layout from "./components/Layout";
import SectionWelcome from "./components/sections/SectionWelcome";
import SectionFirstFlayer from "./components/sections/SectionFirstFlayer";
import SectionGridImages from "./components/sections/SectionGridImages";
import SectionBackgroundFixed from "./components/sections/SectionBackgroundFixed";
import SectionServices from "./components/sections/SectionServices";


export default function Home() {
  return (
    <div>
     <Head>
        <title>DevZeppelin | TecnologIA a tu negocio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="carpas mm,alquiler,carpas,gazebos,lonas,eventos,casamientos,fiesta,aire libre, infraestructura eventos, mendoza"
        />
        <meta
          name="keywords"
          content="carpas mm,alquiler,carpas,gazebos,lonas,eventos,casamientos,fiesta,aire libre, infraestructura eventos, mendoza"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>

      <Layout classHome={"bg-secundary text-navbar"}>

        <SectionWelcome />
        <SectionFirstFlayer />
        <SectionGridImages />
        <SectionBackgroundFixed />       
        <SectionServices />
        
      </Layout>
    </div>
  );
}
