import { api } from "./api"

const getUser = async ( name ) => {
    
    const user = await api.get(`/user?name=${name}`)
    return user.data[0];
}

export { getUser };