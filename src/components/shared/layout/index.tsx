import { FC } from "react"
import { Header } from '@/components/shared/header'

import { Container, Wrapper } from './styles'

interface Props {
    children?: any
}

export const Layout: FC<Props> = (props) => {
    const { children } = props
    return (
        <Container>
            <Header />
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}