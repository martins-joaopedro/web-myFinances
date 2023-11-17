import { api } from "./api"

const registerNewUser = ( user ) => {
    
    const { name, email, password } = user;
    console.log("ok", name, email, password);

    api.post("/user", {
        name,
        email,
        password
    }).then(() => console.log("user criado"))
}

export { registerNewUser };