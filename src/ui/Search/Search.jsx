import { IoMdSearch } from "react-icons/io";

import styles from './Search.module.scss';

const Search = () => {
    return (
        <div className={styles.wrapper}>
            <input 
                type="text"
                className={styles.search}
            />
            <IoMdSearch className={styles.icon}/>
        </div>
    );
};


export default Search;