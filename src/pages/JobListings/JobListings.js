import React, { useEffect, useState } from 'react';
import styles from './JobListings.module.css';

import bgHeader from '../../assets/images/bg-header-desktop.svg';
import JobListingCard from "../../components/JobListingCard/JobListingCard";

const JobListings = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className={`${styles.container}`}>
            {/* <div className={`${styles.header}`}>
                <img src={bgHeader} alt="header" />
            </div> */}
            <div className="row">
                {
                    jobs.map(job => <JobListingCard
                        key={job.id}
                        job={job}
                    ></JobListingCard>)
                }
            </div>
        </div>
    );
};

export default JobListings;