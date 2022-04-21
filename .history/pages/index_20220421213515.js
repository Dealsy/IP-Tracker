import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Image
            src="/images/pattern-bg.png"
            alt="Picture of backdrop"
            width={500}
            height={500}
          />

          <h1 className="text-white">IP Address Tracker</h1>
          <input type="search" placeholder="Search" />
        </div>
        <div className="flex flex-row justify-evenly border-0 shadow-lg w-4/6 m-auto rounded-xl p-5">
          <div className=" border-r-2 border-Gray pr-24">
            <h3>IP ADDRESS</h3>
            <h2> 192.168.1.1 </h2>
          </div>
          <div className=" border-r-2 border-Gray pr-24">
            <h3> LOCATION </h3>
            <h2> Brooklyn, NY 10001 </h2>
          </div>
          <div className=" border-r-2 border-Gray pr-24">
            <h3>TIMEZONE</h3>
            <h2> UTC-5:00 </h2>
          </div>
          <div>
            <h3>ISP</h3>
            <h2>SpaceX Starlink</h2>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
