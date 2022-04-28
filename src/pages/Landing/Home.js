import React from 'react';
import JobFilterCard from "../../components/JobFilterCard/JobFilterCard";
import useJobs from "../../hooks/useJobs";
import JobListings from "../JobListings/JobListings";
import styles from './Home.module.css';

const Home = () => {
    const { jobLists, setJobLists, skillItems, setSkillItems } = useJobs();

    return (
        <div>
            <div className={`${styles.headerBg}`}>
                {/* background image */}
            </div>
            <JobFilterCard jobLists={jobLists} skillItems={skillItems} setSkillItems={setSkillItems} setJobLists={setJobLists} />
            <JobListings jobLists={jobLists} skillItems={skillItems} setSkillItems={setSkillItems} setJobLists={setJobLists} />
        </div>
    );
};

export default Home;