import React, { useState } from 'react';
import styles from './JobListingCard.module.css';

const JobListingCard = ({ job }) => {
    const [filtered, setFiltered] = useState([]);

    const { id, company, logo, new: newJob, featured, position, role, level, postedAt, contract, location, languages, tools } = job;
    const skills = [role, level, ...languages, ...tools];

    // let filteredSkills = [];

    const handleFilter = (skill) => {
        console.log(filtered.indexOf(skill));
        setFiltered([...filtered, skill]);
    };

    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.logo}`}>
                <img src={logo} alt="logo" />
            </div>

            <div className={`${styles.jobDetailsSec}`}>
                <div className={`${styles.postingDetails}`}>
                    <span className={`${styles.company}`}>{company}</span>
                    <small><span className={newJob ? `${styles.newJob}` : ''}>{newJob ? 'NEW!' : ''}</span></small>
                    <small><span className={featured ? `${styles.featured}` : ''}>{featured ? 'FEATURED' : ''}</span></small>
                </div>

                <div>
                    <span className={`${styles.position}`}>{position}</span>
                </div>

                <div className={`${styles.type}`}>
                    {postedAt} . {contract} . {location}
                </div>
            </div>

            <div className={`${styles.skillSec}`}>
                {
                    skills.map((skill, idx) => <p
                        key={idx}
                        className={`${styles.skill}`}
                        onClick={() => handleFilter(skill)}
                    >
                        {skill}
                    </p>)
                }
            </div>
        </div>
    );
};

export default JobListingCard;