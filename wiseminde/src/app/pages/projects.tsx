import {FaSoundcloud, FaSpotify, FaYoutube} from "react-icons/fa6"

export default function Projects() {
    return (
        <div>
            <h1>The Projects</h1>
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
        <div className="m-4">
            <img src="https://picsum.photos/200" alt="" />
            <div>
                <h3>Photoset</h3>
                <h3>By Artist</h3>
            </div>
        </div>
    )
}

function Video() {
    return (
        <div className="m-4">
            <iframe width="200" height="150"
                src="https://www.youtube.com/embed/VwEERD4gSzY?si=dHPrsYfw4SUOkJAK&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            />
            <div>
                <h3>Video</h3>
                <h3>By Artist</h3>
            </div>

        </div>
    )
}

function Song() {
    return (
        <div className="m-4">
            <img src="https://picsum.photos/200" alt="" />
            <div>
                <h3>Song</h3>
                <h3>By Artist</h3>
            </div>
            <ul className="flex justify-between w-[100px] py-2">
                <a href="">
                    <FaSpotify />
                </a>
                <a href="">
                    <FaYoutube />
                </a>
                <a href="">
                    <FaSoundcloud />
                </a>
            </ul>
        </div>
    )
}