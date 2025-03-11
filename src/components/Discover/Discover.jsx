import PictureSongs from "./PictureSongs";

export default function Discover({title}) {
    return (
        <>
            <PictureSongs title={title} />
            <PictureSongs title="New Releases" />
            <PictureSongs title="Popular Tracks" />
            <PictureSongs title="Popular Albums" />
            <PictureSongs title="Workout" />
            <PictureSongs title="Featured Playlist" />
        </>
    )
}