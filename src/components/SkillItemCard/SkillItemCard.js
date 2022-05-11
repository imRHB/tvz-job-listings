import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import styles from './SkillItemCard.module.css';

const clearIcon = <FontAwesomeIcon icon={faXmark} />;

const SkillItemCard = ({ tag, removeFilterTag }) => {
    return (
        <div className={`${styles.itemCard}`}>
            <div className={`${styles.item}`}>{tag}</div>
            <div className={`${styles.close}`} onClick={() => removeFilterTag(tag)}>{clearIcon}</div>
        </div>
    );
};

export default SkillItemCard;