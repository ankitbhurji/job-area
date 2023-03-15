import axios from "axios";

async function AllJobs() {
    const url = 'http://localhost:3001/user/alljobs'
    const allJobs = await axios.get(url)
    return allJobs
}


export default AllJobs;