import { FC } from "react"
import styled from "styled-components"
import { Container, Info, Title } from './styles'

interface Props {
    presentant: string
    type: string
}

export const ArrowRight = styled.div`
    position: absolute; 
    right: -10px; 
    top: 50%; 
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid white;
`

export const HoverItem = Container

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
            <ArrowRight />
        </Container>
    )
}