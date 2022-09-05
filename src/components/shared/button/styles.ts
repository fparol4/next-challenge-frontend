import styled from 'styled-components'
import { theme } from '@/styles/themes/light.theme'

export const Button = styled.button<{ white?: boolean }>`
    width: 160px; 
    height: 40px;
    color: ${props => props.white ? 'white' : 'black'};
    background: ${theme.colors.green};
    border: none; 
    cursor: pointer; 
`

export const EmptyButton = styled(Button)`
    background: none; 
    border: 1px solid ${theme.colors.green}; 
`
