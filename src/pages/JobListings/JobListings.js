import React from 'react';
import styles from './JobListings.module.css';

import JobItemCard from "../../components/JobItemCard/JobItemCard";

const JobListings = ({ jobLists, skillItems, setSkillItems }) => {
    const filtered = jobLists.filter(job => job.skills?.map(skill => skillItems.includes(skill)));

    const newFil = skillItems.map(item => jobLists.map(job => job.skills.includes(item)));
    console.log(newFil[0]);

    return (
        <div className={`${styles.container}`}>
            <div>
                {
                    filtered.length < 1 ? jobLists.map(job => <JobItemCard
                        key={job.id}
                        job={job}
                        skillItems={skillItems}
                        setSkillItems={setSkillItems}
                    ></JobItemCard>)
                        :
                        filtered.map(job => <JobItemCard
                            key={job.id}
                            job={job}
                            skillItems={skillItems}
                            setSkillItems={setSkillItems}
                        ></JobItemCard>)
                }
            </div>
        </div>
    );
};

export default JobListings;