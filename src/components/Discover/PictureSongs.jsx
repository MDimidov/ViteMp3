import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DragAndSlide, Section } from "../Utils/Utils";
import PictureSongItem from "./PictureSongItem";
import { useState } from "react";

export default function PictureSongs() {

    return (
        <>

            <Section className="my-20 max-w-full group">
                <p className="text-2xl hover:underline cursor-pointer">New Music</p>

                <section className={`flex justify-between animate-fade-in mx-auto overflow-auto scrollable-container mt-2 bg-scroll snap-x`}>
                    <DragAndSlide>
                        <PictureSongItem className="snap-center" />
                        <PictureSongItem className="snap-center" />
                        <PictureSongItem className="snap-center" />
                        <PictureSongItem className="snap-center" />
                        <PictureSongItem className="snap-center" />
                        <PictureSongItem className="snap-center" />
                    </DragAndSlide>
                </section>

            </Section>

        </>
    );
}
