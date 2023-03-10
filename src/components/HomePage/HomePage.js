import styles from './HomePage.module.css';
import mountain from '../../Images/mountain.svg'
import people from '../../Images/people.svg'
import rupee from '../../Images/rupee.svg'
import flag from '../../Images/flag.svg'
import { BiSearch } from 'react-icons/bi';
import close from '../../Images/close.svg';
import { useState } from 'react';

function HomePage() {

    const [skills, setSkills] = useState([])

    function selectSkills(skill){
        if(!skills.includes(skill)){
            setSkills([...skills, skill])
        }else{
            return
        }
    }
    function removeSkill(indexRemove){
        setSkills(skills.filter((_, index)=>index !== indexRemove))
    }


    return ( 
        <div>
            <div className={styles.container}>
                <div className={styles.heading_container}>
                    {/* <div> */}
                        <div className={styles.heading_logo_container}>
                            <div className={styles.header_logo}><img src={mountain}/></div>
                            <div className={styles.header_find_my_job}>Findmyjob</div>
                        </div>
                        {/* <div className={styles.header_tagline}>Find your next remote job at companies like <label>swigy</label>, <label>nike</label>, and <label>cuvette</label>.</div> */}
                    {/* </div> */}
                    <div className={styles.heading_photo_container}>
                        <div className={styles.header_hello}>Hello! Recruiter</div>
                        <img className={styles.header_photo} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Avatar" style={{width:'70px', height:'70px'}} />
                    </div>
                </div>

                <div className={styles.header_tagline}>Find your next remote job at companies like <label>swigy</label>, <label>nike</label>, and <label>cuvette</label>.</div>

                <div className={styles.job_container}>
                    <div className={styles.job_search_container}>
                        <div className={styles.job_search_top}>
                            <div className={styles.job_search_icon}><BiSearch/></div>
                            <div className={styles.job_search}><input type='search' placeholder='Job title'/></div>
                            <div className={styles.job_addjob}><button>+ Add Job</button></div>
                        </div>
                        <div className={styles.job_tagline}>Jobs you have posted as a recruiter are listed below</div>
                        <div className={styles.job_skils_container}>
                            <div className={styles.job_skills_wrapper}>
                                <div className={styles.job_skill_selectmenu}>
                                    <select onChange={(event)=>{selectSkills(event.target.value)}}>
                                        <option>HTML</option>
                                        <option>CSS</option>
                                        <option>JAVASCRIPT</option>
                                        <option>REACT</option>
                                        <option>NODE</option>
                                    </select>
                                </div>
                                <div className={styles.skill_list_container}>
                                    {
                                    skills.map((skill, index)=>{
                                        return(
                                            <div key={index} className={styles.skill_list}>{skill}<img onClick={()=>{removeSkill(index)}} src={close}/></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.job_count_container}>100 + Jobs</div>
                    
                    <div className={styles.job_list_containers}>
                        <div className={styles.job_list_container}>
                            <div className={styles.job_list_image}><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Avatar" style={{width:'52px', height:'52px'}}/></div>
                            <div className={styles.job_list_info}>
                                <div className={styles.list_info_1}>
                                    <div className={styles.job_position}>
                                        Frontend Developer
                                    </div>
                                    <div className={styles.job_info}>
                                        <div className={styles.job_people}>
                                            <div><img src={people}/></div>
                                            <div className={styles.job_people_count}>11-50</div>
                                        </div>
                                        <div className={styles.job_sallery}>
                                            <div><img src={rupee}/></div>
                                            <div className={styles.job_people_sallery}>50000</div>
                                        </div>
                                        <div className={styles.job_location}>
                                            <div><img src={flag}/></div>
                                            <div className={styles.job_people_location}>Delhi</div>
                                        </div>
                                    </div>
                                    <div className={styles.job_type_container}>
                                        <div className={styles.job_located}>Office</div>
                                        <div className={styles.job_type}>Full time</div>
                                    </div>
                                </div>
                                <div className={styles.job_edit_add_container}>
                                    <div className={styles.job_post_time}>2 hours ago</div>
                                    <div className={styles.job_buttons_container}>
                                        <div className={styles.edit_button}><button>Edit job</button></div>
                                        <div className={styles.copy_link_button}><button>Copy Link</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.job_list_container}></div>
                        <div className={styles.job_list_container}></div>
                        <div className={styles.job_list_container}></div>
                        <div className={styles.job_list_container}></div>
                        <div className={styles.job_list_container}></div>
                        <div className={styles.job_list_container}></div>
                        <div className={styles.job_list_container}></div>
                        <div className={styles.job_list_container}></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomePage;