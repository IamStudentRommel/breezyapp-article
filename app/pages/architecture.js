import Title from "../components/title";

export default function architecture() {
  return (
    <main className="fade-in opacity-0">
      <Title />
      <div className="max-w-4xl mx-auto px-4 md:px-0 mt-10">
        <h2 className="text-center text-xl md:text-xl bg-gradient-to-r from-blue-950 to-white text-white py-2 px-4">
          Deployment Concept
        </h2>
        <div className="relative">
          <img
            className="max-h-96 h-auto w-auto mx-auto block mb-5 mt-5"
            src="/assets/dep.png"
          />
        </div>
        <h2 className="text-2xl md:text-2xl font-bold mb-4 text-center">
          Not yet done still in progress..
        </h2>
      </div>
    </main>
  );
}
