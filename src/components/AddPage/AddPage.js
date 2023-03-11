import styles from './AddPage.module.css'

function AddPage() {
    return ( 
        <div className={styles.add_page_maincontainer}>
        <div className={styles.add_page_container}>
            <div className={styles.add_page_heading}>
                Findmyjobs
            </div>
            <div className={styles.add_page_title_container}>
                <div className={styles.add_page_title}>Add job description</div>
                <div className={styles.add_page_line_container}>
                    <div className={styles.add_page_line1}></div>
                    <div className={styles.add_page_line2}></div>
                </div>
            </div>
            <div className={styles.add_page_input_container}>
                <div className={styles.input_container}>
                    <div className={styles.label}>Company Name</div>
                    <div className={styles.field}><input type='text' /></div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Add Logo Url</div>
                    <div className={styles.field}><input type='text' /></div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Job Position</div>
                    <div className={styles.field}><input type='text' /></div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Monthly Sallery</div>
                    <div className={styles.field}><input type='text' /></div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Job Type</div>
                    <div className={styles.field}>
                        <select>
                            <option>Select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Semi Full Time</option>
                        </select>
                    </div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Remote/Office</div>
                    <div className={styles.field}>
                    <select>
                        <option>Select</option>
                        <option>Remote</option>
                        <option>Office</option>
                        </select>
                    </div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Location</div>
                    <div className={styles.field}><textarea type='text' /></div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Job Discription</div>
                    <div className={styles.field}><textarea type='text' /></div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>About Company</div>
                    <div className={styles.field}><input type='text' /></div>
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>Skill Required</div>
                    <div className={styles.field}><input type='text' /></div>
                </div>
                <div className={styles.button_container}>
                    <div className={styles.cancel_button}><button>Cancel</button></div>
                    <div className={styles.add_button}><button>+ Add Job</button></div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default AddPage;