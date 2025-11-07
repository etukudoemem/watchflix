import { FaqSection } from "@/components/FAQ/faq-section";
import { GetStartedButton } from "@/components/button/get-started-button";
import { Header } from "@/components/header";
import { Reasons } from "@/components/more-reasons-section";
import { TrendingNow } from "@/components/trending-now-section";
import { Navbar } from "@/components/navbar";

export default function Landing() {
  return (
    <>
      <main className="flex flex-col gap-y-10 md:gap-y-0 w-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <section className="w-full h-auto flex flex-col justify-center items-center bgclass">
              <Navbar />
              <div className="mt-25 md:mt-0 mb-15 md:mb-0 md:h-[90vh] flex justify-center items-center">
                  <Header />
              </div>
          </section>
          <section className="overflow-x-auto w-full px-0 mt-0">
              <TrendingNow />
          </section>
          <section className="w-full mt-10 md:mt-15">
              <Reasons />
          </section>
          <section className="w-full mt-10 md:mt-15">
              <FaqSection />
          </section>
          <section className="w-full mt-10 md:mt-15 px-6 md:px-10 lg:px-30 mb-10">
              <p className="lg:text-lg mb-2">
                  Ready to watch?
              </p>
              <GetStartedButton />
          </section>
      </main>
    </>
  );
}
