import styled from "styled-components"
import { HoverItem } from './tooltip'

export const Container = styled.div`
    background: white; 
    flex-grow: 1; 
    margin-bottom: 40px; 
    border-radius: 8px; 
`
export const List = styled.div``

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    height: 80px; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.5); 
    position: relative; 

    &:hover {
        background-color: rgba(217, 217, 217, 0.45);
        ${HoverItem} {
            visibility: initial;
        }
    }
`

export const Avatar = styled.div`
    width: 70px; 
    height: 70px; 
    overflow: hidden;
    border: 2px solid black; 
    border-radius: 200px; 
    background: ${props => props.theme.colors.green};

    img {
        width: 100%; 
    }
`

export const Data = styled.div`
    display: flex; 
    flex-direction: column;
    font-size: 1rem; 

    .protocol {
        font-weight: bold; 
    }

    span {
        margin: 2px 0; 
    }
`