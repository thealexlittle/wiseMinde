export default function ArtistList(){
    return(
        <div>
            <h1>The Artists</h1>
            <ArtistTile />
        </div>
    )
}

function ArtistTile(){
    return (
        <div>
            <img src="https://picsum.photos/200" alt="" />
            <h2>Artist</h2>
            <div>Artist/Artist/Artist</div>
            <div>See Bio</div>
        </div>
    )
}