import styled from "styled-components";
import { getUser } from "../../Services/Get";
import { useState } from "react";

import { registerNewUser } from "../../Services/Post";

export const AuthPage = () => {

    //const { data, isFetching } = useFetch("/extenses");

    const [user, setUser] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = () => {
        if(!!name && !!email && !!password)
            registerNewUser({ name, email, password });
        else console.log("dados faltando")
    }

    const loadUser = async (name) => {
        const data = await getUser(name);
        setUser(data);
    }

    return(
    <>
        { !user && 
            <Container color="#ddd">
                <AuthContainer>
                    <InputCard>
                        <Text>Preencha suas informações</Text>
                        <Input placeholder="Seu nome" onChange={(e) => setName(e.target.value)}></Input>
                        <Input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></Input>
                        <Input placeholder="Senha" onChange={(e) => setPassword(e.target.value)}></Input>
                    
                        <SubmitButton onClick={submit}>
                            <p> Cadastrar </p>
                        </SubmitButton>
                    </InputCard>
                
                    <LoginButton onClick={() => loadUser(name)}>
                        <p> Possui uma conta com esse nome? Logue! </p>
                    </LoginButton> 
                </AuthContainer>
            </Container>
        }
        {
            !!user &&
            <Container display="flex" color="#ad9405">
                <Text>
                    SEJA BEM-VIND@ {user.name}
                </Text>
            </Container>
        }
    </>
    
    )   
}

const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.color};
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
`

const AuthContainer = styled.div`
    //background: linear-gradient(-145deg, #0f3503, #b1e00844);
    background-color: #63815a;
    height: 100%;
    width: 75vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (width < 768px) {
        width: 100%;
    }
`


const InputCard = styled.div`
    width: clamp(300px, 60vw, 600px);
    height: clamp(300px, 45vh, 450px);
    background-color: #ffffff45;
    border-radius: 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #c4c4c453;
    box-shadow: 5px 5px 2rem #33333352;
`

const Text = styled.p`
    font-size: 1.15rem;
    color: #e6e6e6;
    text-align: center;
`

const Input = styled.input`
    background-color: #e6e6e6;
    padding-left: 5px;
    border: none;
    outline: none;
    height: 45px;
    width: 90%;
    border-radius: 15px;
`

const SubmitButton = styled.button`
    background-color: #195c19;
    width: 50%;
    height: 55px;
    color: #fff;
    border: none;
    border-radius: 15px;
    transition: 0.25s ease all;

`

const LoginButton = styled(SubmitButton)`
    margin-top: 50px;
    background-color: #013241;
    width: clamp(300px, 60vw, 600px);
`