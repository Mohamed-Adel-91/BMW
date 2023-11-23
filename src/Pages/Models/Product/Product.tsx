import Cards from './Cards/Cards'
import SortBy from './SortBy/SortBy'
import style from './Product.module.css'

const Product = () => {
    return (
        <div className={style.productSide}>
            <div className={style.sortBy}><SortBy /></div>
            <div className={style.Cards}><Cards /></div>
        </div>
    )
}

export default Product