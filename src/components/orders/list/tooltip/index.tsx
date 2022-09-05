import { FC } from "react"
import { Container, Info, Title } from './styles'

interface Props {
    presentant: string
    type: string
}

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
        </Container>
    )
}