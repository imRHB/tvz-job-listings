import React from 'react';
import JobFilterCard from "../../components/JobFilterCard/JobFilterCard";
import useJobs from "../../hooks/useJobs";
import JobListings from "../JobListings/JobListings";
// import styles from './Home.module.css';

const Home = () => {
    const { jobLists, skillItems, setSkillItems } = useJobs();

    console.log(skillItems);

    return (
        <div>
            <JobFilterCard jobLists={jobLists} skillItems={skillItems} setSkillItems={setSkillItems} />
            <JobListings jobLists={jobLists} skillItems={skillItems} setSkillItems={setSkillItems} />
        </div>
    );
};

export default Home;