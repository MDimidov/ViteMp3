import DiscoverItem from "./DiscoverItem";

export default function Discover() {
    return (
        <section className="flex justify-between gap-4 animate-fade-in mx-auto my-20 overflow-auto scrollable-container ">
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
        </section>
    );
}
