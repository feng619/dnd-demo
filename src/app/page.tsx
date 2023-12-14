import Hero from "./Hero";

export default function Home() {
  return (
    <main className="flex items-center justify-between min-h-screen bg-stone-100">
      <div className="flex flex-col m-auto gap-4">
        <Hero />
      </div>
    </main>
  );
}
