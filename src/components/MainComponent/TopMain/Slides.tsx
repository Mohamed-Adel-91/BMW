import TopMain from "./TopMain.json"
import "./Slides.css"

interface Item {
    id: number,
    src: string,
    name: string,
    price: string,
    category: string,
    model: string,
    kM: string,
    color: string,
    kind: string,
    fender: string,
    description: string
}


const Slides = () => {
    const Elements = TopMain.map((item: Item) => {
        return (
            <div className="Container" key={item.id}>
                <div className="line_one">
                    <img className="car_img" src={item.src} alt="img" />
                </div>
                <div className="line_two">
                    <h3 className="name">{item.name}</h3>
                    <h6 className="price">{item.price}</h6>
                </div>
                <div className="line_three">
                    <p className="category">{item.category}</p>
                </div>
                <div className="line_four">
                    <p className="model">{item.model}</p>
                    <p className="km">{item.kM}</p>
                    <p className="color">{item.color}</p>
                    <p className="kind">{item.kind}</p>
                    <p className="fender">{item.fender}</p>
                </div>
                <div className="line_five">
                    <p className="description">{item.description}</p>
                </div>
            </div>
        )
    });

    return (
        <div className="slides">
            {Elements}
        </div>
    );
};

export default Slides