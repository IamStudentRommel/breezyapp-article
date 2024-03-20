import Intro from "../components/intro";
import Context from "../components/context";
import Features from "../components/features";
import Title from "../components/title";
import Footer from "../components/footer";
export default function Page() {
  return (
    <main className="fade-in opacity-0">
      <Title />
      <article className="max-w-4xl mx-auto px-4 md:px-0 mt-10">
        <Intro />
        <Context />
        <Features />
        <div className="flex justify-center">
          <Footer />
        </div>
      </article>
    </main>
  );
}
