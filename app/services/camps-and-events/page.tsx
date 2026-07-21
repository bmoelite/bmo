import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CampAndEvents() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-900 my-8">
        <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-4">
            Camps & <span className="text-orange-500 font-black">Events</span>
          </h1>
          <p className="text-lg leading-8 text-slate-300 max-w-2xl mb-8">
            Train with the best at{" "}
            <span className="font-bold text-orange-400">
              BMO Elite Performance
            </span>
            . Join our specialized camps and elevate your game to the next level.
          </p>
          <Link
            href="https://bmo-elite-performance.statstak.io/index/bmo-elite-performance"
            target="_blank"
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
              View All Camps & Events
            </Button>
          </Link>
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-40"
            alt="Baseball training"
            src="/images/kid-baseball.webp"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-transparent" />
        </div>
      </section>
    </main>
  );
}