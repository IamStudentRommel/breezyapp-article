import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function Intro() {
  const apkUrl = "https://expo.dev/artifacts/eas/qvMTGsHv5kjXeBgX4ZAsu3.apk";
  const { width } = useWindowSize();
  const qrCodeSize = width >= 768 ? 180 : 380;

  return (
    <main className="flex flex-col md:flex-row">
      <div className="flex-2 p-4">
        <h2 className="text-xl md:text-xl bg-gradient-to-r from-blue-950 to-white text-white py-2 mb-2">
          Introduction
        </h2>

        <p className="text-md mb-4">
          We are currently in the process of developing the Crime Alert mobile
          application, aiming to provide users with updates on criminal
          activities in their vicinity along with safety information. As part of
          this development process, we need to select a suitable UI toolkit to
          build the app’s user interface. ​
        </p>

        <p className="text-md mb-4">
          This app stands out by delivering real-time alerts on criminal
          activities, emergencies, and public safety issues within Calgary and
          its surrounding areas. It empowers users with immediate notifications,
          facilitating incident reporting and fostering collaboration with local
          authorities to enhance neighborhood safety. The app offers valuable
          insights into crime trends and incidents, supporting law enforcement
          and informing policy-making decisions.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center bg-white border-4 border-blue-300 p-6 rounded-lg shadow-lg">
          <p className="text-sm mb-4  text-black">
            Scan the QR code below to download the Amazing Crime App.
          </p>

          <QRCode value={apkUrl} size={qrCodeSize} />
        </div>
      </div>
    </main>
  );
}
