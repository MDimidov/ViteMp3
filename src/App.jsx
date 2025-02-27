import { CircleDotIcon, CircleIcon, VolumeIcon } from "lucide-react";
import FooterMusic from "./components/Footer/FooterMusic";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { DarkMode } from "./components/Practice/DarkMode";
import Hero from "./components/Hero/Hero";
import Register from "./components/Register/Register";
import Error404 from "./components/Errors/error404";
import { Playlist } from "./components/Songs/Playlist/Playlist";
import { PlaylistContext, PlaylistContextProvider } from "./contexts/PlaylistContext";



export default function App() {
  
  return (
    <PlaylistContextProvider value={false}>
      <div className="min-w-[850px]">
        <Header />
        {/* <Login /> */}
        {/* <Error404 /> */}
        {/* <Register /> */}
        {/* <DarkMode /> */}
        <Playlist />
        <Hero />
        <FooterMusic />
      </div>
    </PlaylistContextProvider>
  );
}
