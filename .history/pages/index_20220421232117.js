import Head from "next/head";
import Arrow from "../images/icon-arrow.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {
  const Map = useMemo(() =>
    dynamic(() => import("../component/Map"), {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    })
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className=" relative z-0 ">
          <div className="bg-Backdrop h-80 bg-no-repeat	 bg-cover  ">
            <h1 className="text-white w-96 m-auto p-4">IP Address Tracker</h1>
            <div className="w-120 m-auto">
              <div className="flex flex-row items-baseline">
                <input
                  className="p-3 w-300 mt-5 rounded-l-xl"
                  type="search"
                  placeholder="Search"
                />
                <button className="bg-Dark-Gray p-3  rounded-r-xl hover:bg-hoverGray m-1 w-14">
                  <Image src={Arrow} alt="Arrow" />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-20 ml-80 mt-32 z-40">
            <div className="flex flex-row justify-evenly border-0 shadow-xl w-5/6 m-auto rounded-xl p-2  bg-white ">
              <div className=" border-r-2 border-Gray pr-24">
                <h3>IP ADDRESS</h3>
                <h2> 192.168.1.1 </h2>
              </div>
              <div className=" border-r-2 border-Gray pl-24 pr-24">
                <h3> LOCATION </h3>
                <h2> Brooklyn, NY 10001 </h2>
              </div>
              <div className=" border-r-2 border-Gray pl-24 pr-24">
                <h3>TIMEZONE</h3>
                <h2> UTC-5:00 </h2>
              </div>
              <div className="pl-24">
                <h3>ISP</h3>
                <h2>SpaceX Starlink</h2>
              </div>
            </div>
          </div>

          <div className="h-115 z-0 ">
            <Map />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
