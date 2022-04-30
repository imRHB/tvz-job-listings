import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import styles from './SkillItemCard.module.css';

const clearIcon = <FontAwesomeIcon icon={faXmark} />;

const SkillItemCard = ({ item, skillItems, setSkillItems }) => {

    return (
        <div className={`${styles.itemCard}`}>
            <div className={`${styles.item}`}>{item}</div>
            <div className={`${styles.close}`} onClick={() => setSkillItems(skillItems.filter(skill => skill !== item))}>{clearIcon}</div>
        </div>
    );
};

export default SkillItemCard;