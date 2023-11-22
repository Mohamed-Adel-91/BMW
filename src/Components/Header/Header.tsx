// Header.tsx

import React from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css';
import Elements from './Elements/Elements';
import Filter from './Filter/Filter';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const hideAdditionalDiv = () => {
        document.getElementById('elements')?.classList.add('hidden');
        document.getElementById('filter')?.classList.add('hidden');
    };

    const showAdditionalDiv = () => {
        document.getElementById('elements')?.classList.remove('hidden');
        document.getElementById('filter')?.classList.remove('hidden');
    };

    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <nav className={styles.navBar}>
                    <NavBar hideAdditionalDiv={hideAdditionalDiv} showAdditionalDiv={showAdditionalDiv} />
                </nav>
                <div className={styles.elements} id="elements">
                    <Elements />
                </div>
                <div className={styles.filter} id="filter">
                    <Filter />
                </div>
            </div>
        </div>
    );
};

export default Header;
