"use client"
import { BsArrowRight } from "react-icons/bs";
import {useRouter, } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  const getStarted = () => {
    router.push('/create')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 md:p-24">
      <div className="text-2xl md:text-5xl p-6">
        <h1 className="underline text-gray-300">BuildSpace News Letter</h1>
        <p className="text-sm md:text-lg text-teal-500 font-semibold ">
          News Letter Service made easy
        </p>
      </div>
      <div>
        <button onClick={getStarted} className="flex justify-center items-center border-2 text-teal-500 md:p-4 p-2 rounded-xl hover:text-cyan-500 hover:font-semibold hover:border-teal-500 duration-300 ease-in-out">
          Get Started {<BsArrowRight />}
        </button>
      </div>
    </main>
  );
}
