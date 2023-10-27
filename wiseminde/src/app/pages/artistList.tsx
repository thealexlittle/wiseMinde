import { Link } from "react-router-dom"
import data from "../data.json"
import { ArtistData } from "./artist"

export default function ArtistList() {
    return (
        <div>
            <h1 className="mb-4 p-1 bg-white inset-box">The Artists</h1>
            <div className="mx-auto flex flex-row flex-wrap content-center">
                {data.artists.map(e => { return <ArtistTile artist={e} /> })}
            </div>

        </div>
    )
}

function ArtistTile(props: { artist: ArtistData }) {
    return (
        <section className=" flex-none mx-auto m-4">
            <div className='card card-tertiary'>
                <div className='card-header'>
                    <h2>artist.exe</h2>
                </div>
                <div className='card-body'>
                    <h1 className='font-bold'>
                        {props.artist.name}
                    </h1>
                </div>
                <img
                    className='card-img-top mx-1 inset-box'
                    src={props.artist.photo}
                    style={{ maxWidth: "300px" }}
                    alt="image"
                />
                <div className='card-footer'>
                    <p className="inset-box bg-white p-2 mb-2">
                        {props.artist.outlets.map(o => { return "\\ " + o + " \\" })}
                    </p>
                    <Link to={`/artists/${props.artist.name}`} className="btn">
                        <span>See Bio</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}