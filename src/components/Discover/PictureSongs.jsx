import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Section } from "../Utils/Utils";
import PictureSongItem from "./PictureSongItem";
import { useState } from "react";

export default function PictureSongs() {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };


    return (
        <>

            <Section className="my-20 max-w-full group">
                <p className="text-2xl hover:underline cursor-pointer">New Music</p>

                <section className="flex justify-between gap-4 animate-fade-in mx-auto overflow-auto scrollable-container mt-2 bg-scroll snap-x">
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                    <PictureSongItem className="snap-center" />
                </section>
                <div className="-translate-y-40 h-full w-full m-auto justify-between items-center flex text-red-500 px-8 text-3xl size-20 z-990">
                    <button className="bg-white">
                        <ChevronLeftIcon />
                    </button>
                    <button className="bg-white">
                        <ChevronRightIcon />
                    </button>
                </div>

            </Section>

        </>
    );
}
