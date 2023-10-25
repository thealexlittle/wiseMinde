import { FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa6"

export default function Projects() {
    return (
        <div>
            <h1 className="mb-4">The Projects</h1>
            <div>
                <ProjectList />
            </div>
        </div>
    )
}

function ProjectList() {
    return (
        <div className="mx-auto flex flex-row flex-wrap content-center">
            <Photo />
            <Video />
            <Song />
        </div>
    )
}

function Photo() {
    return (
        <section className="min-w-64 max-w-3xl mx-auto mb-4">
            <div className='card card-tertiary'>
                <div className='card-header'>
                    photoset.exe
                </div>
                <div className='card-body'>
                    <h1 className='font-bold'>
                        Photoset
                    </h1>
                </div>
                <img
                    className='card-img-top mx-2'
                    src="https://picsum.photos/300"
                    alt="image"
                />
                <div className='card-footer'>
                    <h6 className="bg-white p-2 mb-2">
                        By Artist
                    </h6>
                </div>
            </div>
        </section>
    )
}

function Video() {
    return (
        <section className="min-w-64 max-w-3xl mx-auto mb-4">
            <div className='card card-tertiary'>
                <div className='card-header'>
                    video.exe
                </div>
                <div className='card-body'>
                    <h1 className='font-bold'>
                        Video
                    </h1>
                </div>
                <iframe width="300" height="200"
                    src="https://www.youtube.com/embed/VwEERD4gSzY?si=dHPrsYfw4SUOkJAK&amp;controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="card-img-top mx-2"
                />
                <div className='card-footer'>
                    <h6 className="bg-white p-2 mb-2">
                        By Artist
                    </h6>
                </div>
            </div>
        </section>
    )
}

function Song() {
    return (
        // <div className="m-4">
        //     <img src="https://picsum.photos/200" alt="" />
        //     <div>
        //         <h3>Song</h3>
        //         <h3>By Artist</h3>
        //     </div>
        //     <ul className="flex justify-between w-[100px] py-2">
        //         <a href="">
        //             <FaSpotify />
        //         </a>
        //         <a href="">
        //             <FaYoutube />
        //         </a>
        //         <a href="">
        //             <FaSoundcloud />
        //         </a>
        //     </ul>
        // </div>
        <section className=" flex-none min-w-64 max-w-3xl px-4 mx-auto mb-4">
            <div className='card card-tertiary'>
                <div className='card-header'>
                    song.exe
                </div>
                <div className='card-body'>
                    <h1 className='font-bold'>
                        Artist
                    </h1>
                </div>
                <img
                    className='card-img-top mx-2'
                    src="https://picsum.photos/300"
                    alt="image"
                />
                <div className='card-footer'>
                    <h6 className="bg-white p-2 mb-2">
                        By Artist
                    </h6>
                    <Links />
                </div>
            </div>
        </section>
    )
}

function Links() {
    return (
        <ul className="flex justify-between">
            <a href="https://www.instagram.com" className='btn'>
                <FaSoundcloud size="1.5em" />
            </a>
            <a href="https://www.twitter.com" className='btn'>
                <FaYoutube size="1.5em" />
            </a>
            <a href="https://www.spotify.com" className='btn'>
                <FaSpotify  size="1.5em" />
            </a>
        </ul>
    )
}