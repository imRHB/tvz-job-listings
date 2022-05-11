import React from 'react';
import JobFilterCard from "../../components/JobFilterCard/JobFilterCard";
import JobListings from "../JobListings/JobListings";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <div className={`${styles.headerBg}`}>
                {/* background image */}
            </div>
            <JobFilterCard />
            <JobListings />
        </div>
    );
};

export default Home;