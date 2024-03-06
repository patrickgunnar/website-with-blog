import styles from "./loading.module.css";

export default function Loading() {
    return (
        <div className={styles.banter_loader}>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
            <div className={styles.banter_loader__box}></div>
        </div>
    );
}
