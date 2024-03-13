import Intro from "../subcomponents/intro";
import Context from "../subcomponents/context";
import Features from "../subcomponents/features";
import Title from "../subcomponents/title";
import Footer from "../subcomponents/footer";
export default function Page() {
  return (
    <main>
      <Title />
      <article className="max-w-4xl mx-auto px-4 md:px-0 mt-10">
        <Intro />
        <Context />
        <Features />
        <h2 className="text-xl md:text-2xl font-bold mb-2">Developers</h2>
        <div className="flex justify-center">
          <Footer />
        </div>
      </article>
    </main>
  );
}
