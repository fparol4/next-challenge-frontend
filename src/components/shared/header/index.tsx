import { FC } from "react"
import { Container } from './styles'
import Image from 'next/image'
import Link from "next/link"

export const Header: FC<{}> = () => {
    return (
        <Container>
            <Link href='/'>
                <Image width={220} height={50} src="/logo.png" />
            </Link>
        </Container>
    )
}