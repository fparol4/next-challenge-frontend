import { FC } from "react"
import { Container } from './styles'
import Image from 'next/image'


export const Header: FC<{}> = () => {
    return (
        <Container>
            <Image src="/logo.png" />
        </Container>
    )
}