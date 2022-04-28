import React from 'react';
import styles from './JobListings.module.css';

import JobItemCard from "../../components/JobItemCard/JobItemCard";

const JobListings = ({ jobLists, skillItems }) => {
    const filteredJobs = (jobLists, skillItems) => {
        console.log(jobLists.filter(job => skillItems.indexOf(job.level) > -1));
    };

    filteredJobs(jobLists, skillItems);

    return (
        <div className={`${styles.container}`}>
            <div>
                {
                    jobLists.map(job => <JobItemCard
                        key={job.id}
                        job={job}
                    ></JobItemCard>)
                }
            </div>
        </div>
    );
};

export default JobListings;