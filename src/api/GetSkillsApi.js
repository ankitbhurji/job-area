import axios from 'axios';

async function GetSKillsAPi() {
    // const url = 'http://localhost:3001/user/skills'
    const url = 'https://job-area-backend.onrender.com/user/skills'
    const skill = await axios.get(url)
    return skill
}


export default GetSKillsAPi;