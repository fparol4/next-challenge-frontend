import { FC } from "react"
import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    background: white; 
    visibility: hidden;
    left: -45%;
`

export const Title = styled.div`
    padding: 2px; 
    background: ${props => props.theme.colors.green};
    span { 
        font-weight: bolder;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;  
`

interface Props {
    presentant: string
    type: string
}

export const OrderItemTooltip: FC<Props> = (props) => {
    const { presentant, type } = props
    return (
        <Container>
            <Title>
                <span>
                    Informações Adicionais
                </span>
            </Title>
            <Info>
                <span>{presentant}</span>
                <span>{type}</span>
            </Info>
        </Container>
    )
}