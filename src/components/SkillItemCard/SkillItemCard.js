import React from 'react';
import styles from './SkillItemCard.module.css';

const SkillItemCard = ({ item }) => {
    return (
        <div className={`${styles.itemCard}`}>
            <div className={`${styles.item}`}>{item}</div>
            <div className={`${styles.close}`}>X</div>
        </div>
    );
};

export default SkillItemCard;