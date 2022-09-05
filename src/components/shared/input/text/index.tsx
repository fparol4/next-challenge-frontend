import { FC } from "react"

import { Container, Input, Label } from './styles'

export const TextInput: FC<{
    value?: string,
    placeholder?: string,
    title: string,
    onChange?: (value: string) => any
}> = (props) => {
    return (
        <Container>
            <Label>{props.title}</Label>
            <Input
                type="text" value={props.value}
                placeholder={props.placeholder}
                onChange={(event) => props.onChange(event.target.value)} />
        </Container>
    )
}