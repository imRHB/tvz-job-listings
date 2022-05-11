import React from 'react';
import useJobs from "../../hooks/useJobs";
import SkillItemCard from "../SkillItemCard/SkillItemCard";
import styles from './JobFilterCard.module.css';

const JobFilterCard = () => {
    const { clearFilter, filteredTags, removeFilterTag } = useJobs();

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.jobFilterCard}`}>
                {
                    filteredTags?.length > 0 ? <div className={`${styles.filteredItems}`}>
                        {
                            filteredTags?.map((tag, idx) => <SkillItemCard
                                key={idx}
                                tag={tag}
                                removeFilterTag={removeFilterTag}
                            ></SkillItemCard>)
                        }
                    </div>
                        :
                        <span className={`${styles.filterAlt}`}>Click on the skill item to filter jobs</span>
                }

                {
                    filteredTags.length > 0 && <div className={`${styles.clear}`}>
                        <span onClick={clearFilter}>Clear</span>
                    </div>
                }
            </div>
        </div>
    );
};

export default JobFilterCard;