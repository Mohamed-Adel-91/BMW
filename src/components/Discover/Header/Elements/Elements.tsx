import images from './images.json'
import style from "./Elements.module.css"
import { AiOutlineCheck } from 'react-icons/ai';

interface Item {
    id: number;
    decs: string;
}

const Elements = () => {
    const imageElements = images.map((item: Item) => {
        return <div key={item.id}>
            <p className={style.elements}>
                <div className={style.checkIcon}>
                    <AiOutlineCheck />
                </div>
                {item.decs}
            </p>
        </div>
    });

    return (
        <div className={style.element}>
            {imageElements}
        </div>
    );
};



export default Elements;