import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css';
import Elements from './Elements/Elements';
import Filter from './Filter/Filter';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const [backgroundImage, setBackgroundImage] = useState<string>(styles.top);
    const [imageTitle, setImageTitle] = useState<string>('BMW APPROVED USED CARS.');
    const [showAdditionalDiv, setShowAdditionalDiv] = useState<boolean>(true);

    const handleModelLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // Prevent the default behavior of the link click
        event.preventDefault();
        setBackgroundImage('anotherBackgroundImage');
        setImageTitle('APPROVED USED BMW 3 SERIES.');
        setShowAdditionalDiv(!showAdditionalDiv);
    };

    return (
        <div className={styles.header}>
            <div className={`${styles.top} ${styles[backgroundImage]}`}>
                <nav className={styles.navBar}>
                    <NavBar onModelLinkClick={handleModelLinkClick} />
                </nav>
                <div className={styles.content}>
                    <h1 className='text-white py-home'>{imageTitle}</h1>
                    {showAdditionalDiv && (<p className="py-home text-white">Search, reserve and buy your Approved Used BMW - all online.</p>)}
                </div>
                {showAdditionalDiv && (
                    <div className={styles.elements}>
                        <Elements />
                    </div>
                )}
            </div>
            {showAdditionalDiv && (
                <div className={styles.filter}>
                    <Filter />
                </div>)
            }
        </div>
    );
};

export default Header;