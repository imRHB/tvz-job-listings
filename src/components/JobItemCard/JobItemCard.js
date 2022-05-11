import React from 'react';
import useJobs from "../../hooks/useJobs";
import styles from './JobItemCard.module.css';

const JobItemCard = ({ job }) => {
    const { addFilterTag } = useJobs();
    const { company, logo, new: newJob, featured, position, role, level, postedAt, contract, location, languages, tools } = job;

    const tags = [role, level, ...languages, ...tools];

    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.logo}`}>
                <img src={logo} alt="logo" />
            </div>

            <div className={`${styles.jobDetailsSec}`}>
                <div className={`${styles.jobDetails}`}>
                    <div className={`${styles.postingDetails}`}>
                        <span className={`${styles.company}`}>{company}</span>
                        <small><span className={newJob ? `${styles.newJob}` : ''}>{newJob ? 'NEW!' : ''}</span></small>
                        <small><span className={featured ? `${styles.featured}` : ''}>{featured ? 'FEATURED' : ''}</span></small>
                    </div>

                    <div>
                        <span className={`${styles.position}`}>{position}</span>
                    </div>

                    <div className={`${styles.type}`}>
                        {postedAt} <span style={{ fontSize: '4px', margin: '0px 6px' }}><i className="fa-solid fa-circle"></i></span> {contract} <span style={{ fontSize: '4px', margin: '0px 6px' }}><i className="fa-solid fa-circle"></i></span> {location}
                    </div>
                </div>

                <div className={`${styles.hrLine}`}>
                    {/* horizontal line */}
                </div>

                <div className={`${styles.skills}`}>
                    {
                        tags.map((tag, idx) => <p
                            key={idx}
                            className={`${styles.skill}`}
                            onClick={() => addFilterTag(tag)}
                        >
                            {tag}
                        </p>)
                    }

                </div>
            </div>
        </div>
    );
};

export default JobItemCard;