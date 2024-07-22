import React from "react";

export default function Features() {
  return (
    <main>
      <h2 className="text-xl md:text-xl bg-gradient-to-r from-blue-950 to-white text-white py-2 px-4 mb-2">
        Key Features
      </h2>
      <ul className="list-disc pl-4 mb-4">
        <li className="text-md">Real-time incident tracking</li>
        <li className="text-md">Interactive crime maps</li>
        <li className="text-md">Anonymous tip submission</li>
        <li className="text-md">Customizable alerts and notifications</li>
        <li className="text-md">Integration with law enforcement databases</li>
      </ul>

      <h2 className="text-xl md:text-xl bg-gradient-to-r from-blue-950 to-white text-white py-2 px-4 mb-2">
        How It Works
      </h2>
      <p className="text-md mb-4">
        The Amazing Crime App utilizes advanced algorithms and geospatial
        analysis techniques to collect and analyze data from various sources,
        through user submissions. Users can report incidents through the app by
        providing crucial information to authorities.
      </p>

      <p className="text-md mb-4">
        Law enforcement agencies can access the platform to view real-time crime
        maps, identify high-risk areas, and allocate resources more effectively.
        Additionally, the app provides tools for citizens to stay informed about
        local crime trends and take proactive measures to enhance their safety.
      </p>

      <p className="text-md mb-4">
        With its user-friendly interface and powerful features, the Amazing
        Crime App empowers both law enforcement professionals and community
        members to collaborate in combating crime and creating safer
        neighborhoods.
      </p>

      <h2 className="text-xl md:text-xl bg-gradient-to-r from-blue-950 to-white text-white py-2 px-4">
        Sample Demo
      </h2>
      <div className="video-container flex justify-center">
        <iframe
          className="w-full h-auto md:h-120 lg:h-96"
          src="https://www.youtube.com/embed/jH0zxRBCUwM?si=WZxuyIFZlZNiafPZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
