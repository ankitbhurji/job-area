import axios from "axios";

async function FindJobsApi(skills) {
    
    // const url = `http://localhost:3001/user/findjobs/${skills}`
    const url = `https://job-area-backend.onrender.com/user/findjobs/${skills}`
    const getdata = await axios.get(url)
    return getdata
}

export default FindJobsApi;