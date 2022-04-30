import React from 'react';
import styles from './JobItemCard.module.css';

const JobItemCard = ({ job, skillItems, setSkillItems }) => {

    const { company, logo, new: newJob, featured, position, role, level, postedAt, contract, location, languages, tools } = job;
    const skills = [role, level, ...languages, ...tools];
    job.skills = skills;

    // const filteredJobs = skillItems?.map(skill => job.skills?.includes(skill));
    // console.log(filteredJobs.every(res => res === true && console.log(job)));
    // console.log(filteredJobs);

    const handleAddFilter = (skill) => {
        if (!skillItems.includes(skill)) {
            setSkillItems([...skillItems, skill]);
        }
        return skillItems;
    };

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
                        skills.map((skill, idx) => <p
                            key={idx}
                            className={`${styles.skill}`}
                            onClick={() => handleAddFilter(skill)}
                        >
                            {skill}
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobItemCard;