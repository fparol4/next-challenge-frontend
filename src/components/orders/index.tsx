import Link from "next/link"
import styled from "styled-components"
import { FC } from "react"
import { AiFillEdit as EditIcon } from "react-icons/ai"

import { Order } from "src/clients/api.client"
import { theme } from "@/styles/themes/light.theme"

import { OrderItemTooltip, Container as Tooltip } from '@/components/orders/order-list-tooltip'

interface Props {
    orders: Order[]
}

const Container = styled.div`
    background: white; 
    flex-grow: 1; 
    margin-bottom: 40px; 
    border-radius: 8px; 
`
const List = styled.div``

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    height: 80px; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.5); 
    position: relative; 

    &:hover {
        ${Tooltip} {
            visibility: initial;
        }
    }
`

const Avatar = styled.div`
    width: 70px; 
    height: 70px; 
    overflow: hidden;
    border: 2px solid black; 
    border-radius: 200px; 
    background: ${props => props.theme.colors.green};

    img {
        width: 100%; 
    }
`

const Data = styled.div`
    display: flex; 
    flex-direction: column;
    font-size: 1rem; 

    .protocol {
        font-weight: bold; 
    }

    span {
        margin: 2px 0; 
    }
`

export const OrdersList: FC<Props> = (props) => {
    const { orders } = props

    return (
        <Container>
            <List>
                {orders.map((order, index) => (
                    <Item key={index}>
                        <OrderItemTooltip
                            presentant={order.presentant}
                            type={order.type}
                        />
                        <Avatar>
                            <img src={order.avatar} />
                        </Avatar>
                        <Data>
                            <span className='protocol'>{order.protocol}</span>
                            <span className='entry_date'>{order.entry_date}</span>
                            <span className='due_date'>{order.due_date}</span>
                        </Data>
                        <Link href={`/orders/create/${order.id}`}>
                            <EditIcon style={{
                                width: '30px',
                                height: '30px',
                                color: `${theme.colors.green}`,
                                cursor: 'pointer'
                            }}>Edit!</EditIcon>
                        </Link>
                    </Item>
                ))}
            </List>
        </Container >
    )
}