import styled from "styled-components"

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    flex-grow:1; 

    .input {
        background-color: white; 
        margin: 10px 0; 
    }
`

export const Label = styled.form`
    color: white; 
`

export const Line = styled.div`
    display: flex;
    margin: 10px 0; 

    & + .final {
        justify-content: end;

        button {
            color: white; 
        }

        button:nth-child(2) {
            margin-left: 4px; 
        }
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0; 

    span {
        color: white; 
        margin-bottom: 4px; 
    }

    input {
        background: white;
        height: 10px; 
    }
`

export const DateContainer = styled.div`
    display: flex; 
    span {
        color: white; 
    }
    .date-picker {
        background-color: white;
        width: 100%;  
    }

    .date-box:nth-child(2) {
        margin-left: 5px; 
    }
`

export const ButtonsContainer = styled.div`
    display: flex; 
    justify-content: end;

    button {
        font-weight: bold;
        color: white;
    }

    button:nth-child(2) {
        margin-left: 6px;
    }
`
