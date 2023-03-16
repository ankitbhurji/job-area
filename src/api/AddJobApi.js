import axios from "axios";

async function AddJobApi(allInputs) {
    const time =  new Date()
    const payload = {
        companyName:        allInputs.companyName,
        logoUrl:            allInputs.logoUrl,
        jobPosition:        allInputs.jobPosition,
        monthlySallery:     allInputs.monthlySallery,
        jobType:            allInputs.jobType,
        workFrom:           allInputs.workFrom,
        location:           allInputs.location,
        jobDiscription:     allInputs.jobDiscription,
        aboutCompany:       allInputs.aboutCompany,
        requiredSkill:      allInputs.requiredSkill,
        time:               time
    }
    const postData = await axios({
        method: 'post',
        // url: 'http://localhost:3001/user/addjob',
        url: 'https://job-area-backend.onrender.com/user/addjob',
        data: payload, 

    })
    return postData;
}

export default AddJobApi;