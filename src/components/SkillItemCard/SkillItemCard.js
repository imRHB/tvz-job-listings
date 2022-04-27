import React from 'react';
import styles from './SkillItemCard.module.css';

const SkillItemCard = ({ item, skillItems, setSkillItems }) => {

    return (
        <div className={`${styles.itemCard}`}>
            <div className={`${styles.item}`}>{item}</div>
            <div className={`${styles.close}`} onClick={() => setSkillItems(skillItems.filter(skill => skill !== item))}>X</div>
        </div>
    );
};

export default SkillItemCard;