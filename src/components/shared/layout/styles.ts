import styled from "styled-components"

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    background: ${props => props.theme.colors.blue};
    min-height: 100vh; 
`

export const Wrapper = styled.div`
    display: flex; 
    flex-grow: 1;
    flex-direction: column; 
    max-width: 768px; 
    margin: auto; 
`