import { Section } from "../Utils/Utils";
import PictureSongItem from "./PictureSongItem";

export default function PictureSongs() {
    return (
        <Section className="my-20">
            <p className="text-2xl hover:underline cursor-pointer">New Music</p>
            <section className="flex justify-between gap-4 animate-fade-in mx-auto overflow-auto scrollable-container mt-2">
                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
                <PictureSongItem />
            </section>
        </Section>
    );
}
