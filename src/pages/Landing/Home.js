import React from 'react';
import JobFilterCard from "../../components/JobFilterCard/JobFilterCard";
import useJobs from "../../hooks/useJobs";
import JobListings from "../JobListings/JobListings";
import styles from './Home.module.css';

const Home = () => {
    const { jobLists, setJobLists, skillItems, setSkillItems } = useJobs();

    return (
        <div style={{ minHeight: '100vh' }}>
            <div className={`${styles.headerBg}`}>
                {/* background image */}
            </div>
            <JobFilterCard jobLists={jobLists} setJobLists={setJobLists} skillItems={skillItems} setSkillItems={setSkillItems} />
            <JobListings jobLists={jobLists} setJobLists={setJobLists} skillItems={skillItems} setSkillItems={setSkillItems} />
        </div>
    );
};

export default Home;