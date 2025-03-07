import { useRef } from "react";
import { Section } from "../Utils/Utils";
import PictureSongItem from "./PictureSongItem";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDragControls } from "framer-motion";
import { btnClass } from "../../utils/utils";

export default function PictureSongs() {
    const containerRef = useRef(null);
    const controls = useDragControls();

    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = 210;
            containerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const btnArrow = `transform group-hover:bg-black/15 dark:hover:bg-white/15 p-2 rounded-full text-white z-10 size-10`;
    return (
        <Section className="my-20 relative overflow-hidden">
            <p className="text-2xl hover:underline cursor-pointer">New Music</p>


            <div className="w-full flex justify-between group relative top-35">
                <button
                    className={`left-0 ${btnArrow}`}
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className={`right-0 ${btnArrow}`}
                    onClick={() => scroll("right")}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            
            <motion.section
                ref={containerRef}
                className="flex gap-4 mx-auto scrollable-container mt-2 cursor-grab overflow-auto"
                drag="x"
                dragConstraints={{ left: -500, right: 0 }}
                dragControls={controls}
            >

                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
            </motion.section>
        </Section>
    );
}
