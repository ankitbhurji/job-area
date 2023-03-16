import axios from "axios";

async function FindJobsApi1(skills) {
    // const url = `http://localhost:3001/user/findjobs1/${skills}`
    const url = `https://job-area-backend.onrender.com/user/findjobs1/${skills}`
    const getdata = await axios.get(url)
    return getdata
}

export default FindJobsApi1;