import './Banner.css'

interface BannerProps {
    imgSrc: string;
    alt?: string;
}

export function Banner({ imgSrc, alt }:BannerProps) {
    return (
        <header className='banner'>
            {/*<img src="/img/banner.png" alt="Index"/>*/}
            <img src={imgSrc} alt={alt}/>
        </header>
    )
}

export default Banner