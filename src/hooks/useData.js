import { useEffect, useState } from 'react';

const useData = () => {
    let [jobLists, setJobLists] = useState([]);
    let [skillItems, setSkillItems] = useState(['Frontend', 'CSS', 'JavaScript']);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setJobLists(data));
    }, []);

    return {
        jobLists,
        setJobLists,
        skillItems,
        setSkillItems
    };
};

export default useData;