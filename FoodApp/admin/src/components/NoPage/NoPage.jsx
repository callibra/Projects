import React from 'react';
import styles from './nopage.module.css'; 

const NoPage = () => {
  return (
    <div className={styles.notfoundContainer}>
        <h1 className={styles.notfoundTitle}>Error 404: Not Found</h1>
        <p className={styles.notfoundMessage}>The content does not exist.</p>
    </div>
  );
};

export default NoPage;

