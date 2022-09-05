import { FC } from "react"
import { Container } from './styles'

export const Header: FC<{}> = () => {
    return (
        <Container>
            <img src="/logo.png" />
        </Container>
    )
}