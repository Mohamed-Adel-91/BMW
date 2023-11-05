import NavBar from './NavBar/NavBar'
import styles from './header.module.css'
import Elements from './Elements/Elements'

const Header = () => {
    const { header } = styles
    return (
        <div className={header}>
            <NavBar />
            <div className='content'>
                <h1 className='text-white py-home'>BMW APPROVED USED CARS.</h1>
                <p className="py-home text-white">Search, reserve and buy your Approved Used BMW - all online.</p>
            </div>
            <Elements />
        </div>
    )
}

export default Header