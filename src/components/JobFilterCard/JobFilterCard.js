import React, { useState } from 'react';
import SkillItemCard from "../SkillItemCard/SkillItemCard";
import styles from './JobFilterCard.module.css';

const JobFilterCard = () => {
    const [items, setItems] = useState(['Frontend', 'CSS', 'JavaScript']);

    const handleClearItems = () => {
        setItems([]);
    };

    return (
        <div className={`${styles.container}`}>
            {
                items.length > 0 && <div className={`${styles.jobFilterCard}`}>
                    <div className={`${styles.filteredItems}`}>
                        {
                            items.map((item, idx) => <SkillItemCard
                                key={idx}
                                item={item}
                            ></SkillItemCard>)
                        }
                    </div>

                    <div className={`${styles.clear}`}>
                        <span onClick={handleClearItems}>Clear</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default JobFilterCard;