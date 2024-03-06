"use client";

import styles from "./error.module.css";

export default function Error() {
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
