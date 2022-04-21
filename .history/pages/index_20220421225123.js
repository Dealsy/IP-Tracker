import Head from "next/head";
import Arrow from "../images/icon-arrow.svg";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../component/map"), {
    ssr: false,
  });
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="  ">
          <div className="bg-Backdrop h-80 bg-no-repeat	 bg-cover relative ">
            <h2 className="text-white w-96 m-auto p-4">IP Address Tracker</h2>
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

          <div className="flex flex-row justify-evenly border-0 shadow-xl w-4/6 m-auto rounded-xl p-10  ">
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
        </div>
        <div id="map">
          <MapWithNoSSR />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
