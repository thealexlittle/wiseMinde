import { BsInstagram, BsTwitter, BsSpotify, BsYoutube } from 'react-icons/bs'
import data from "../data.json"
import { useParams } from 'react-router-dom'

export interface ArtistData {
    name: string,
    photo: string,
    outlets: string[],
    icon: string,
    socials: {
        ig: string,
        tw: string,
        yt: string,
        sp: string
    };
}

export default function ArtistPage() {
    const { artistname } = useParams();

    function getArtist(name: string | undefined): ArtistData {
        const ad: ArtistData | undefined = data.artists.find(e => { return e.name == name })
        return ad ? ad : data.artists[0]
    }

    function getBio(name: string | undefined): string | undefined {
        const b: string | undefined = data.bios.find(e => { return e.name == name })?.bio
        return b ? b : data.bios[0].bio
    }

    return (
        <main className="flex flex-col px-2 md:flex-row w-full">
            <Details artist={getArtist(artistname)} />
            <Bio bio={getBio(artistname)} />
        </main>
    )
}


function Details(props: { artist: ArtistData }) {
    return (
        <section className=" flex-none min-w-64 max-w-3xl px-4 mx-auto mb-4">
            <div className='card card-tertiary'>
                <div className='card-header'>
                    <h2>artist.exe</h2>
                </div>
                <div className='card-body flex flex-row align-baseline'>
                    <img
                        src={props.artist.icon}
                        style={{ maxWidth: "2.5em" }}
                        className="inset-box mr-2"
                        alt="spinning star" />
                    <h6 className='font-bold'>
                        {props.artist.name}
                    </h6>
                </div>
                <img
                    className='card-img-top mx-2 inset-box'
                    style={{ maxWidth: "300px" }}
                    src={props.artist.photo}
                    alt="image"
                />
                <div className='card-footer'>
                    <p className="inset-box bg-white p-2 mb-2">
                        {props.artist.outlets.map(o => { return "\\ " + o + " \\" })}
                    </p>
                    <Socials socials={props.artist.socials} />
                </div>
            </div>
        </section>
    )
}

function Socials(props: { socials: ArtistData["socials"] }) {
    return (
        <ul className="flex justify-between">
            <a href={`https://www.instagram.com/${props.socials.ig}`} className='btn'>
                <BsInstagram size="1.5em" />
            </a>
            <a href={`https://www.twitter.com/${props.socials.tw}`} className='btn'>
                <BsTwitter size="1.5em" />
            </a>
            <a href={`https://www.spotify.com/${props.socials.sp}`} className='btn'>
                <BsSpotify size="1.5em" />
            </a>
        </ul>
    )
}

function Bio(props: { bio: string | undefined }) {
    return (
        <div className='card card-tertiary'>
            <div className='card-header'>
                <h2>bio.exe</h2>
            </div>
            <div className='card-body inset-box bg-white h-fit m-1'>
                <p className='pr-2 mr-2 card-text'>
                    {props.bio}
                </p>
            </div>
        </div>
    )
}
