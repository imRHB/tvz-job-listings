import React from 'react';
import styles from './JobListings.module.css';

import useJobs from "../../hooks/useJobs";
import JobItemCard from "../../components/JobItemCard/JobItemCard";

const JobListings = () => {
    // const [jobs, setJobs] = useState([]);
    const { jobLists } = useJobs();

    /* useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []); */

    return (
        <div className={`${styles.container}`}>
            {/* <div className={`${styles.header}`}>
                <img src={bgHeader} alt="header" />
            </div> */}
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