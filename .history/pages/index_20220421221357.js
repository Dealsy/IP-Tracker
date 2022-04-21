import Head from "next/head";
import Arrow from "../images/icon-arrow.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-Backdrop h-64 bg-no-repeat	 bg-cover">
          <h1 className="text-white w-96 m-auto p-4">IP Address Tracker</h1>
          <div className="w-96 m-auto">
            <input
              className="p-3 w-115 mt-5 rounded-xl"
              type="search"
              placeholder="Search"
            />
            <button className="bg-Dark-Gray p-3 rounded-r-xl">
              {" "}
              <Image src={Arrow} alt="Arrow" />{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-evenly border-0 shadow-xl w-4/6 m-auto rounded-xl p-5">
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
