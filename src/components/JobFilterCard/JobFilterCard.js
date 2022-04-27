import React from 'react';
import useJobs from "../../hooks/useJobs";
import SkillItemCard from "../SkillItemCard/SkillItemCard";
import styles from './JobFilterCard.module.css';

const JobFilterCard = () => {
    // const [items, setItems] = useState(['Frontend', 'CSS', 'JavaScript']);
    const { skillItems, setSkillItems } = useJobs();

    const handleClearItems = () => {
        setSkillItems([]);
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.jobFilterCard}`}>
                <div className={`${styles.filteredItems}`}>
                    {
                        skillItems?.map((item, idx) => <SkillItemCard
                            key={idx}
                            item={item}
                            skillItems={skillItems}
                            setSkillItems={setSkillItems}
                        ></SkillItemCard>)
                    }
                </div>

                <div className={`${styles.clear}`}>
                    <span onClick={handleClearItems}>Clear</span>
                </div>
            </div>
        </div>
    );
};

export default JobFilterCard;