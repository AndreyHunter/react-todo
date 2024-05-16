import styles from "./FilterWidjet.module.scss";

const FilterWidjet = () => {
    return (
        <section className={styles.filters}>
            <button
                type="button"
                className={styles.btn}>
                All
            </button>
            <button
                type="button"
                className={styles.btn}>
                Done
            </button>
        </section>
    );
};

export default FilterWidjet;
