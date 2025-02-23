import { div } from "framer-motion/client";
import { Footer } from "../Footer/Footer";
import Songs from "../Songs/Songs";

export default function Hero() {
    return (
        <div className="--drop-shadow-3xl-hero mb-40 bg-(--bg-light-hero) dark:bg-(--bg-dark-hero) w-1/2 h-screen m-auto flex -z-1 items-center justify-between px-2 sm:px-4 md:px-6 rounded-2xl">
            <Songs />

            {/* <Footer /> */}
        </div>
    )
}