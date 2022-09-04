import { FC } from "react";
import {
    Container,
    Items,
    Divisor,
    Subtitle,
    Title
} from './styles'

interface Props {
    title: string
    subtitle: string,
    children?: any
}

export const PageTitle: FC<Props> = (props) => {
    const { title, subtitle, children } = props
    return (
        <Container>
            <Items>
                <Title>{title}</Title>
                <Divisor>|</Divisor>
                <Subtitle>{subtitle}</Subtitle>
            </Items>
            {children}
        </Container >
    )
}