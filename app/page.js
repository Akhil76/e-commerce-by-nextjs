import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1 className="text-center">Next app</h1>
      <button className="">Click</button>
      <div class="text-5xl font-extrabold ...">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello world 2
        </span>
      </div>
     
    </div>
  );
}
