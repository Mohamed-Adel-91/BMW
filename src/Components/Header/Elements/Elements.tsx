import images from './images.json'
import style from "./Elements.module.css"

interface Item {
    id: number;
    decs: string;
}

const Elements = () => {
    const imageElements = images.map((item: Item) => {
        return (
            <div key={item.id} className={style.elementDiv}>
                <div className={style.checkIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="106.904" height="81.392" viewBox="0 0 106.904 81.392">
                        <path id="Icon_material-done" data-name="Icon material-done" d="M39.115,72.785,13.6,47.274l-8.5,8.5L39.115,89.792l9.225-9.225L112,16.9l-8.5-8.5Z" transform="translate(-5.1 -8.4)" fill="rgba(0,102,177,0.7)" />
                    </svg>
                </div>
                <span>{item.decs}</span>
            </div>
        )
    });

    return (
        <div className={style.element}>
            {imageElements}
        </div>
    );
};



export default Elements;