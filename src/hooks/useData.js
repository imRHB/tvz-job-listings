import { useEffect, useState } from 'react';

const useData = () => {
    const [jobLists, setJobLists] = useState([]);
    const [skillItems, setSkillItems] = useState(['Frontend', 'CSS', 'JavaScript']);

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