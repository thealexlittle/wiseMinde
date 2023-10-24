export default function ArtistList(){
    return(
        <div>
            <h1>The Artists</h1>
            <div className="mx-auto flex flex-row flex-wrap content-center">
            <ArtistTile />
            <ArtistTile />
            </div>

        </div>
    )
}

function ArtistTile(){
    return (
        <div className="m-4">
            <img src="https://picsum.photos/200" alt="" />
            <h2>Artist</h2>
            <h3>Artist/Artist/Artist</h3>
            <div>See Bio</div>
        </div>
    )
}