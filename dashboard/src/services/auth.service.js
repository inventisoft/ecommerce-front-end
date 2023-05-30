import API from '../conection/conection'

const AuthServices = {
    
    login: async (credentials) => {
        try {
            return await API.post('/user/login', credentials, { headers: {'Content-Type': 'multipart/form-data'} })
        } catch (e) {
            console.log(e)
        }
    },

}

export default AuthServices
