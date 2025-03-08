import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Section } from "../Utils/Utils";
import PictureSongItem from "./PictureSongItem";
import { useState } from "react";

export default function PictureSongs() {
    // let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        // if (current === 0) setCurrent(slides.length - 1);
        // else setCurrent(current - 1);
    };

    let nextSlide = () => {
        // if (current === slides.length - 1) setCurrent(0);
        // else setCurrent(current + 1);
    };


    return (
        <>

            <Section className="my-20 max-w-full">
                <p className="text-2xl hover:underline cursor-pointer">New Music</p>
                <section className="flex justify-between gap-4 animate-fade-in mx-auto overflow-auto scrollable-container mt-2 bg-scroll snap-x">
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <div className="-top-1/2 h-full w-1/2 justify-between items-center flex gap-10 text-red-500 px-10 text-3xl absolute size-20 z-10">
                        <button>
                            <ChevronLeftIcon />
                        </button>
                        <button>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </section>
            </Section>

        </>
    );
}
