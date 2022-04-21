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
        <h1 className="text-white">IP Address Tracker</h1>
        <input type="search" placeholder="Search" />
        <div className="flex flex-row justify-evenly border-2 shadow-lg w-5/6 m-auto rounded-lg">
          <div className="">
            <h3>IP ADDRESS</h3>
            <h2> 192.168.1.1 </h2>
          </div>
          <div>
            <h3> LOCATION </h3>
            <h2> Brooklyn, NY 10001 </h2>
          </div>
          <div>
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
