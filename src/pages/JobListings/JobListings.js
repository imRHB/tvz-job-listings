import React from 'react';
import styles from './JobListings.module.css';

import JobItemCard from "../../components/JobItemCard/JobItemCard";

const filters = {
    languages: [],
    tools: [],
    role: [],
    level: []
};

const JobListings = ({ jobLists }) => {
    const handleFilter = (tag) => {
        filters[tag[0]].push(tag[1]);
    };

    const filteredJobList = jobLists.filter(({ languages, tools, role, level }) => {
        return (
            filters.languages.some((x) => languages.includes(x)) ||
            filters.tools.some((x) => tools.includes(x)) ||
            filters.role.some((x) => role === x) ||
            filters.level.some((x) => level === x)
        );
    });


    return (
        <div className={`${styles.container}`}>
            <div>
                {
                    (filteredJobList.length === 0 ? jobLists : filteredJobList).map(job => <JobItemCard
                        key={job.id}
                        job={job}
                        onSelectFilter={handleFilter}
                    ></JobItemCard>)
                }
            </div>
        </div>
    );
};

export default JobListings;