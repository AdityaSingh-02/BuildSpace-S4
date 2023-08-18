import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-5xl p-6">
        <h1 className="underline text-gray-300">BuildSpace News Letter</h1>
        <p className="text-lg text-teal-500">News Letter Service made easy</p>
      </div>
      <div>
        <button className="border-2 text-teal-500 p-4 rounded-xl">Get Started</button>
      </div>
    </main>
  );
}
