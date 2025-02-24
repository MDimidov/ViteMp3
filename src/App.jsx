import { CircleDotIcon, CircleIcon, VolumeIcon } from "lucide-react";
import { FooterMusic } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { DarkMode } from "./components/Practice/DarkMode";
import Hero from "./components/Hero/Hero";


export default function App() {
  return (
    <div className="min-w-[850px]">
      <Header />
      <Login />
      {/* <DarkMode /> */}
      <Hero />
      <FooterMusic />
    </div>
  );
}
