import axios from 'axios';

const baseApiUrl = 'http://localhost:5050';

export default {
    register:async (data) => {
        const url = `${baseApiUrl}/singup`
        const result = axios.post(url, data)
                        .then(data => data)
                        .catch(err => console.log(err))

        return result
    },
    login:async (data) => {
        const url = `${baseApiUrl}/singin`
        
        const result = axios.post(url, data)
            .then(res => res )
            .catch(err => console.log(err));

        return result
            
    },
    getUserByID:async (data) => {
        const url = `${baseApiUrl}/users/${data}`
        const result = axios.get(url)

        return result
    },
    getMessageByChat:async (data) => {
        const url = `${baseApiUrl}/messages/${data}`

        const result = axios.get(url)
            .then(user => user)

        return result 
    },
    getUsers:async () => {
        const url = `${baseApiUrl}/users`

        const result = axios.get(url)
            .then(user => user)
        
        return result
    },
    getChats:async() => {
        const url = `${baseApiUrl}/chats`

        const result = axios.get(url)
                        .then(res => res)

        return result
    }, 
    saveChat:async(data) => {
        const url = `${baseApiUrl}/chats`

        axios.post(url, data)
    },
    getByUser:async(data) => {
        const url = `${baseApiUrl}/userschats/${data}`
        const result = axios.get(url) 
                        .then(res => res)

        return result
    },
    saveUserChats:async(data) => {
        const url = `${baseApiUrl}/userschats`
        const result = axios.post(url, data)
                        .then(data => data)
                        .catch(err => console.log(err))

        return result
    },
    deleteUserChats:async(data) => {
        const url = `${baseApiUrl}/userschats/${data}`

        axios.delete(url, data)
    }
}