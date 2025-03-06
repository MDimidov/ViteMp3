import DiscoverItem from "./DiscoverItem";

export default function Discover() {
    return (
        <section className="flex justify-between gap-4 animate-fade-in mx-auto my-20 overflow-auto">
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
        </section>
    );
}
