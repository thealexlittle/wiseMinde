import { BsInstagram, BsTwitter, BsSpotify, BsYoutube } from 'react-icons/bs'

export default function Artist() {
    return (
        <main className="flex flex-col px-2 md:flex-row">
            <Details />
            <div className='pr-2 mr-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan. Senectus et netus et malesuada fames ac. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Purus gravida quis blandit turpis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Eget velit aliquet sagittis id. Imperdiet dui accumsan sit amet nulla. Eu ultrices vitae auctor eu augue ut. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eu sem integer vitae justo eget magna fermentum iaculis eu.
                Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Ultrices mi tempus imperdiet nulla malesuada. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Cum sociis natoque penatibus et magnis dis parturient. Lacus vestibulum sed arcu non odio euismod lacinia. Lectus sit amet est placerat in egestas erat. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Semper quis lectus nulla at. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. In cursus turpis massa tincidunt dui ut ornare. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Diam quam nulla porttitor massa id neque. Id porta nibh venenatis cras sed. Morbi tristique senectus et netus et malesuada fames ac. Ultricies mi eget mauris pharetra et. Sed elementum tempus egestas sed sed risus pretium. Velit egestas dui id ornare arcu odio
            </div>
        </main>
    )
}


function Details() {
    return (
        <section className=" flex-none min-w-64 max-w-3xl px-8 mx-auto">
            <h1>Artist</h1>
            <img src="https://picsum.photos/200" 
            alt="image"
            />
            <Socials/>
            <div> See Projects </div>
        </section>
    )
}

function Socials(){
    return (
        <ul className="flex justify-evenly w-[200px] py-2">
            <a href="https://www.instagram.com">
                <BsInstagram />
            </a>
            <a href="https://www.twitter.com">
                <BsTwitter />
            </a>
            <a href="https://www.spotify.com">
                <BsSpotify />
            </a>
        </ul>
    )
}