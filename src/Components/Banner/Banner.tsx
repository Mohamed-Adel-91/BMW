import style from "./Banner.module.css"
interface BannerProps {
    title: string;
    src: string;
    desc: string;
}
const Banner = ({ title, src, desc }: BannerProps) => {
    return (
        <div className={style.banner} >
            <img className={style.image} src={src} />
            <div className={style.content}>
                <h3 className={style.title} >{title}</h3>
                <p className={style.desc} >{desc}</p>
            </div>
        </div>
    )
}

export default Banner