import axios from axios;

const API_URL = 'http://localhost:8000/posts/'


const createPost = async (post,token) =>{
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL,post,config)
}

