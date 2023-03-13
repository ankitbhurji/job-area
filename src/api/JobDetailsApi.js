import axios from "axios";

async function JobDetailsApi(id) {
    const url = `http://localhost:3001/user/jobdetails/${id}`
    const getJobDetails = await axios.get(url)
    return getJobDetails
}

export default JobDetailsApi;