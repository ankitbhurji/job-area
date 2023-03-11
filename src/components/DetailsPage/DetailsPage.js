import styles from './DetailsPage.module.css'

import mountain from '../../Images/mountain.svg'
import people from '../../Images/people.svg'
import rupee from '../../Images/rupee.svg'
import flag from '../../Images/flag.svg'
import { BiSearch } from 'react-icons/bi';
import close from '../../Images/close.svg';
import { useState } from 'react';
import AddPage from '../AddPage/AddPage';
import { useNavigate } from "react-router-dom";
import EditPage from '../EditPage/EditPage';

function DetailsPage() {
    return ( 
        <div>
            <div className={styles.container}>
                <div className={styles.heading_container}>
                    {/* <div> */}
                        <div className={styles.heading_logo_container}>
                            <div className={styles.header_logo}><img src={mountain}/></div>
                            <div className={styles.header_find_my_job}>Findmyjob</div>
                        </div>
                    {/* </div> */}
                    <div className={styles.heading_photo_container}>
                        <div className={styles.header_hello}>Hello! Recruiter</div>
                        <img className={styles.header_photo} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Avatar" style={{width:'70px', height:'70px'}} />
                    </div>
                </div>

                <div className={styles.header_tagline}>Find your next remote job at companies like <label>swigy</label>, <label>nike</label>, and <label>cuvette</label>.</div>

                <div className={styles.info_container}>
                    <div className={styles.profile_info_container}>
                        <div className={styles.image_container}><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Avatar" style={{width:'70px', height:'70px'}}/></div>
                        <div className={styles.details_container}>
                            <div className={styles.details}>
                                <div className={styles.post}>Backend Developer</div>
                                <div className={styles.location}>Ripple Hire | delhi, india</div>
                                <div className={styles.time}>Posted 10 hours ago</div>
                            </div>
                            <div className={styles.copy_button}><button>Copy Link</button></div>
                        </div>
                    </div>

                    <div className={styles.job_info_container}>
                        <div className={styles.offer_container}>
                            <div className={styles.tag}>Job Offer</div>
                            <div className={styles.tag_info}>60000 per month</div>
                        </div>
                        <div className={styles.Mode_container}>
                            <div className={styles.tag}>Job Mode</div>
                            <div className={styles.tag_info}>Full Time</div>
                        </div>
                        <div className={styles.office_container}>
                            <div className={styles.tag}>Office/Remote</div>
                            <div className={styles.tag_info}>Office</div>
                        </div>
                        <div className={styles.location_container}>
                            <div className={styles.tag}>Location</div>
                            <div className={styles.tag_info}>Delhi</div>
                        </div>
                    </div>

                    <div className={styles.about_container}>
                        <div className={styles.about_info}>
                            <div className={styles.job}>
                                <div className={styles.job_heading}>About Job</div>
                                <div className={styles.job_discription}>We are seeking an aspiring Backend Developer to join our dynamic team. The successful candidate will work on developing and maintaining high-quality software applications. You will work alongside experienced software engineers to design and implement complex applications, debug and resolve issues.</div>
                            </div>
                            <div className={styles.company}>
                                <div className={styles.company_heading}>About Company</div>
                                <div className={styles.company_discription}>RippleHire exists to make recruiting effortless, human and delightful. RippleHire is a cloud-based hiring platform that was founded with the mission of enabling enterprises hire great talent effortlessly. Our dedication to the craft has seen our customers win several national and international awards. We are known for a category defining employee referral product and a deep talent acquisition platform.</div>
                            </div>
                        </div>
                        <div className={styles.skill_container}>
                            <div className={styles.skills}>
                                <div className={styles.skill_heading}>Skills Mandatory</div>
                                <div className={styles.skill}>python</div>
                                <div className={styles.skill}>html</div>
                                <div className={styles.skill}>css</div>
                                <div className={styles.skill}>mongodb</div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
     );
}

export default DetailsPage;