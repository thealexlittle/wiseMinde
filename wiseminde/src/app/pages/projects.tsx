export default function Projects(){
    return(
        <main>
            <h1>Projects</h1>
            <ProjectList />
        </main>
    )
}

function ProjectList(){
    return (
        <div>
            <Photo />
            <Video />
            <Song />
        </div>
    )
}

function Photo(){
    return (
        <div>
            <img src="https://picsum.photos/200" alt="" />
            <div>
                <h3>Photoset</h3>
                <h4>YYYY</h4>
            </div>
            <h3>By Artist</h3>
        </div>
    )
}

function Video(){
    return (
        <div>
            <iframe width="200" height="150" 
            src="https://www.youtube.com/embed/VwEERD4gSzY?si=dHPrsYfw4SUOkJAK&amp;controls=0" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            />
            <div>
                <h3>Video</h3>
                <h4>YYYY</h4>
            </div>
            <h3>By Artist</h3>
        </div>
    )
}

function Song(){
    return (
        <div>
            <img src="https://picsum.photos/200" alt="" />
            <ul>
                <i>SC</i>
                <i>SP</i>
                <i>AP</i>
            </ul>
            <div>
                <h3>Song</h3>
                <h4>YYYY</h4>
            </div>
            <h3>By Artist</h3>
        </div>
    )
}