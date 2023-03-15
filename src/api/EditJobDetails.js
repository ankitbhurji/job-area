import axios from "axios";

function EditJobDetails(allInputs, allSkills) {
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
    axios({
        method: 'put',
        url: 'http://localhost:3001/user/editdetails',
        data: payload, 

    }).then(function(response) {
        console.log(response);
    }).catch(function (error){
        console.log(error);});
}

export default EditJobDetails;