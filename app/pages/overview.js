import Intro from "../components/intro";
import Context from "../components/context";
import Features from "../components/features";
import Title from "../components/title";
import Footer from "../components/footer";

export default function Page() {
  return (
    <main className="fade-in opacity-0">
      <Title />
      <article className="max-w-5xl mx-auto px-4 md:px-0 mt-10 relative">
        <div className="flex flex-col justify-center items-center mb-3">
          <img
            src="/assets/mel.png"
            alt="Author"
            className="w-32 h-32 rounded-full border-2 border-white absolute top-0 transform -translate-y-1/2 z-10"
          />
          <div className="mt-20 text-center italic">
            <p className="text-md">Author: Rommel Hipos</p>
          </div>
        </div>
        <Intro />
        <Context />
        <Features />
        <Footer />
      </article>
    </main>
  );
}
