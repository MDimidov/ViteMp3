import { CircleDotIcon, CircleIcon, VolumeIcon } from "lucide-react";
import FooterMusic from "./components/Footer/FooterMusic";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { DarkMode } from "./components/Practice/DarkMode";
import Hero from "./components/Hero/Hero";
import Register from "./components/Register/Register";
import Error404 from "./components/Errors/error404";
import { Playlists } from "./components/Songs/Playlist/Playlists";
import { PlaylistContext, PlaylistContextProvider } from "./contexts/PlaylistContext";
import Library from "./components/Songs/Library/Library";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Discover from "./components/Discover/PictureSongs";
import { DragAndSlide } from "./components/Practice/DragAndSlide/DragAndSlide";



export default function App() {

  return (
    <PlaylistContextProvider value={false}>
      <div>
        <Header />

        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Hero />} />
          <Route path="dark" element={<DarkMode />} />
          <Route path="drag" element={<DragAndSlide />} />
          {/* <Route path="discover" element={<Discover />} /> */}
        </Routes>
        
        {/* <Library /> */}
        <Playlists />
        <FooterMusic />

      </div>
    </PlaylistContextProvider>
  );
}
