import { Canvas } from "@react-three/fiber";
import Head from "next/head";

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
        <div id="canvas-container">
          <Canvas style={{ outline: "2px solid red" }}>
            <mesh>
              <boxBufferGeometry />
              <meshPhongMaterial color="teal" />
            </mesh>
          </Canvas>
        </div>
      </section>
    </>
  );
}
