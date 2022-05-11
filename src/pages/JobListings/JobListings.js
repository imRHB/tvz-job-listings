import React, { useEffect, useState } from 'react';
import styles from './JobListings.module.css';

import useJobs from "../../hooks/useJobs";
import JobItemCard from "../../components/JobItemCard/JobItemCard";

const JobListings = () => {
    const { jobLists, filteredTags } = useJobs();
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        const filteredJobLists = () => {
            if (filteredTags) {
                const filterJobs = jobLists.filter((job) => {
                    return filteredTags.every((tag) => {
                        return (
                            job.role === tag ||
                            job.level === tag ||
                            job.languages.includes(tag) ||
                            job.tools.includes(tag)
                        );
                    });
                });

                setFilteredJobs(filterJobs);
            }

            else {
                setFilteredJobs(jobLists);
            }
        };

        filteredJobLists();

    }, [filteredTags, jobLists]);

    return (
        <div className={`${styles.container}`}>
            <div>
                {
                    filteredJobs.map(job => <JobItemCard
                        key={job.id}
                        job={job}
                    ></JobItemCard>)
                }
            </div>
        </div>
    );
};

export default JobListings;