import { useEffect, useState } from 'react';

const useData = () => {
    let [jobLists, setJobLists] = useState([]);
    let [filteredTags, setFilteredTags] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setJobLists(data));
    }, []);

    const addFilterTag = (tag) => {
        if (!filteredTags.includes(tag)) {
            setFilteredTags([...filteredTags, tag]);
        }
    };

    const removeFilterTag = (id) => {
        const restTag = filteredTags.filter((tag) => tag !== id);
        setFilteredTags(restTag);
    };

    const clearFilter = () => {
        setFilteredTags([]);
    };

    return {
        jobLists,
        setJobLists,
        filteredTags,
        setFilteredTags,
        addFilterTag,
        removeFilterTag,
        clearFilter
    };
};

export default useData;