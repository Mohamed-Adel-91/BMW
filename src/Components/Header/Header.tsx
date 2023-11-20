import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css';
import Elements from './Elements/Elements';
import Filter from './Filter/Filter';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const [showAdditionalDiv, setShowAdditionalDiv] = useState<boolean>(true);
    const handleModelLinkClick = () => {
        setShowAdditionalDiv(false);
    }

    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <nav className={styles.navBar}>
                    <NavBar onModelLinkClick={handleModelLinkClick} />
                </nav>
                {showAdditionalDiv ? (
                    <div className={styles.elements}>
                        <Elements />
                    </div>) : null
                }
            </div>
            {showAdditionalDiv ? (
                <div className={styles.filter}>
                    <Filter />
                </div>) : null
            }
        </div>
    );
};

export default Header;