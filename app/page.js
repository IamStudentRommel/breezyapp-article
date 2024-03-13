import Intro from "../app/introduction/intro";
import Context from "../app/introduction/context";
import Design from "./introduction/design";
export default function Page() {
  return (
    <main>
      <div className="text-center md:text-xl pt-56 md:pt-12">
        <p className="text-lg md:text-4xl text-green-500 font-bold">
          Amazing Crime App
        </p>
      </div>

      <article className="max-w-4xl mx-auto mt-8 px-4 md:px-0">
        <Intro />
        <Context />
        <Design />
        <h2 className="text-2xl md:text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc pl-4 mb-4">
          <li className="text-md">Real-time incident tracking</li>
          <li className="text-md">Interactive crime maps</li>
          <li className="text-md">Anonymous tip submission</li>
          <li className="text-md">Customizable alerts and notifications</li>
          <li className="text-md">
            Integration with law enforcement databases
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold mb-2">How It Works</h2>
        <p className="text-md mb-4">
          The Amazing Crime App utilizes advanced algorithms and geospatial
          analysis techniques to collect and analyze data from various sources,
          including police reports, surveillance cameras, and user submissions.
          Users can report incidents anonymously through the app, providing
          crucial information to authorities.
        </p>

        <p className="text-md mb-4">
          Law enforcement agencies can access the platform to view real-time
          crime maps, identify high-risk areas, and allocate resources more
          effectively. Additionally, the app provides tools for citizens to stay
          informed about local crime trends and take proactive measures to
          enhance their safety.
        </p>

        <p className="text-md mb-4">
          With its user-friendly interface and powerful features, the Amazing
          Crime App empowers both law enforcement professionals and community
          members to collaborate in combating crime and creating safer
          neighborhoods.
        </p>
      </article>
    </main>
  );
}
