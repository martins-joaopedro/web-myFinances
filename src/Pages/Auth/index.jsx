import styled from "styled-components";
import { useFetch } from "../../Hooks/useFetch"
import { useState } from "react";

import { registerNewUser } from "../../Services/Post";

export const AuthPage = () => {

    //const { data, isFetching } = useFetch("/extenses");

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = () => {
        if(!!name && !!email && !!password)
            registerNewUser({ name, email, password });
        else console.log("dados faltando")
    }

    return(
        <Container>
            <AuthContainer>
                <InputCard>
                    <InputCard.Line>Preencha suas informações</InputCard.Line>
                    <Input placeholder="Seu nome" onChange={(e) => setName(e.target.value)}></Input>
                    <Input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></Input>
                    <Input placeholder="Senha" onChange={(e) => setPassword(e.target.value)}></Input>
                
                    <SubmitButton onClick={submit}>
                        <p> Cadastrar </p>
                    </SubmitButton>
                </InputCard>
            </AuthContainer>
        </Container>
    )   
}

const Container = styled.div`
    background-color: #dddddd;
`

const AuthContainer = styled.div`
    //background: linear-gradient(-145deg, #0f3503, #b1e00844);
    background-color: #63815a;
    height: 100vh;
    width: 75vw;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (width < 768px) {
        width: 100%;
    }
`

const InputCard = styled.div`
    min-width: 90%;
    height: 400px;
    background-color: #ffffff45;
    border-radius: 25px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #c4c4c453;
    position: absolute;
    box-shadow: 5px 5px 2rem #33333352;
`

InputCard.Line = styled.p`
    font-size: 1.15rem;
    color: #e6e6e6;
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