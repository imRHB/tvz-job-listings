import React from 'react';
import JobFilterCard from "../../components/JobFilterCard/JobFilterCard";
import JobListings from "../JobListings/JobListings";

const Home = () => {
    return (
        <div>
            <JobFilterCard />
            <JobListings />
        </div>
    );
};

export default Home;