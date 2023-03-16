import axios from "axios";

async function SearchJobsApi(searchField) {

    const url = `http://localhost:3001/user/${searchField}`
    // const url = `https://job-area-backend.onrender.com/user/${searchField}`
    const searchJobs = await axios.get(url)
    return searchJobs
}

export default SearchJobsApi;