import { Link } from "react-router-dom"

export default function ArtistList() {
    return (
        <div>
            <h1 className="mb-4">The Artists</h1>
            <div className="mx-auto flex flex-row flex-wrap content-center">
                <ArtistTile />
                <ArtistTile />
            </div>

        </div>
    )
}

function ArtistTile() {
    return (
        // <div className="m-4">
        //     <img src="https://picsum.photos/200" alt="" />
        //     <h2>Artist</h2>
        //     <h3>Artist/Artist/Artist</h3>
        //     <div>See Bio</div>
        // </div>
        <section className=" flex-none min-w-64 max-w-3xl mx-auto m-4">
            <div className='card card-tertiary'>
                <div className='card-header'>
                    artist.exe
                </div>
                <div className='card-body'>
                    <h1 className='font-bold'>
                        Artist
                    </h1>
                </div>
                <img
                    className='card-img-top mx-1'
                    src="https://picsum.photos/300"
                    alt="image"
                />
                <div className='card-footer'>
                    <h6 className="bg-white p-2 mb-2">
                        Discipline/Discipline
                    </h6>
                    <Link to="/" className="btn">
                        <span>See Bio</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}