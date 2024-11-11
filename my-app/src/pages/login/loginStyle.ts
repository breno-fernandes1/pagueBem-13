import styled from "styled-components";

export const LoginContainer = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
`;

export const LoginLogo = styled.img`
     width: 150px;
     margin-bottom: 20px;
`;

export const TitleLogin = styled.h2`
    margin-bottom: 20px;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    margin-bottom: 15px;
`;
  
export const LabelName = styled.label`
    display: block;
    margin-bottom: 5px;
    text-align: left;
`;

export const Inputs = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    margin-bottom: 10px;
`;

export const ButtonLogin = styled.button`
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #0056b3;
    }
`;