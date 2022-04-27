import React from 'react';
import useJobs from "../../hooks/useJobs";
import styles from './JobItemCard.module.css';

const JobItemCard = ({ job }) => {
    // const [filtered, setFiltered] = useState([]);
    const { skillItems, setSkillItems } = useJobs();

    const { company, logo, new: newJob, featured, position, role, level, postedAt, contract, location, languages, tools } = job;
    const skills = [role, level, ...languages, ...tools];

    // let filteredSkills = [];

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

            <hr />

            <div>
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