import axios from "axios";

async function EditJobDetails(allInputs, allSkills) {
    const time =  new Date()
    const payload = {
        userId:             allInputs._id,
        companyName:        allInputs.companyName,
        logoUrl:            allInputs.logoUrl,
        jobPosition:        allInputs.jobPosition,
        monthlySallery:     allInputs.monthlySallery,
        jobType:            allInputs.jobType,
        workFrom:           allInputs.workFrom,
        location:           allInputs.location,
        jobDiscription:     allInputs.jobDiscription,
        aboutCompany:       allInputs.aboutCompany,
        // requiredSkill:      allInputs.requiredSkill
        requiredSkill:      allSkills, 
        time:               time
    }
    const editSuccess = await axios({
        method: 'put',
        // url: 'http://localhost:3001/user/editdetails',
        url: 'https://job-area-backend.onrender.com/user/editdetails',
        data: payload, 

    })
    return editSuccess
    // .then(function(response) {
    //     console.log(response);
    //     return editSuccess
    // }).catch(function (error){
    //     console.log(error);});
}

export default EditJobDetails;