import { useContext } from "react";
import { JobContext } from "../contexts/JobProvider";

const useJobs = () => {
    return useContext(JobContext);
};

export default useJobs;