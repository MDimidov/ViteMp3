import { div } from "framer-motion/client";
import { Footer } from "../Footer/Footer";
import Songs from "../Songs/Songs";

export default function Hero() {
    return (
        <div className="--drop-shadow-3xl-hero mb-40 bg-(--bg-light-hero) dark:bg-(--bg-dark-hero) w-1/2 m-auto -z-1 items-center px-2 sm:px-4 md:px-6 rounded-xl shadow-lg border-amber-600 border max-h-[calc(100vh)] overflow-x-hidden overflow-y-auto scrollable-container pb-60">
            <Songs />

            <Footer />
        </div>
    )
}