import axios from 'axios';

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: 'Client-ID a51c642b51120e7eb6c2b347eaacbca34d4977461117792f6b68ad8dce96261b',
    },
})