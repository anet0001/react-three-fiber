import Head from "next/head";
import BasicScene from "@/components/scenes/BasicScene";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Three Fiber</title>
        <meta name="description" content="Nonso's RTF testing environment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="home-container">
        <BasicScene />
      </section>
    </>
  );
}
