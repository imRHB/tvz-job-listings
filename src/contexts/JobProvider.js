import React, { createContext } from 'react';
import useData from "../hooks/useData";

export const JobContext = createContext();

const JobProvider = ({ children }) => {
    const allContext = useData();

    return (
        <JobContext.Provider value={allContext}>
            {children}
        </JobContext.Provider>
    );
};

export default JobProvider;