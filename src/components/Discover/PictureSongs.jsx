import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DragAndSlide, Section } from "../Utils/Utils";
import PictureSongItem from "./PictureSongItem";

export default function PictureSongs() {

    return (
        <>

            <Section className="my-20 max-w-full">
                <p className="text-2xl hover:underline cursor-pointer">New Music</p>

                <section className={`animate-fade-in mt-2`}>
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
