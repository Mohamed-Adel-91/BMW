import images from './images.json'
import "./Elements.css"
import { AiOutlineCheck } from 'react-icons/ai';

interface Item {
    id: number;
    decs: string;
}

const Elements = () => {
    const imageElements = images.map((item: Item) => {
        return <div key={item.id}>
            <p className='text-white elements'>
                <div className='checkIcon'>
                    <AiOutlineCheck />
                </div>
                {item.decs}
            </p>
        </div>
    });

    return (
        <div className='element'>
            {imageElements}
        </div>
    );
};



export default Elements;