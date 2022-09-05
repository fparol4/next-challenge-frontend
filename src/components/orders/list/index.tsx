import Link from "next/link"
import { FC } from "react"
import { AiFillEdit as EditIcon } from "react-icons/ai"

import { Order } from "src/clients/api.client"
import { theme } from "@/styles/themes/light.theme"

import { OrderItemTooltip } from './tooltip'
import { Avatar, Container, Data, Item, List } from './styles'

interface Props {
    orders: Order[]
}

export const OrdersList: FC<Props> = (props) => {
    const { orders } = props

    return (
        <Container>
            <List>
                {orders.map((order, index) => {
                    {
                        return (
                            (
                                <Item key={index}>
                                    <OrderItemTooltip
                                        presentant={order.presentant}
                                        type={order.type}
                                    />
                                    <Avatar>
                                        <img src={order.avatar!} />
                                    </Avatar>
                                    <Data>
                                        <span className='protocol'>{order.protocol}</span>
                                        <span className='entry_date'>{order.entry_date}</span>
                                        <span className='due_date'>{order.due_date}</span>
                                    </Data>
                                    <Link href={`/orders/update/${order.id}`}>
                                        <EditIcon style={{
                                            width: '30px',
                                            height: '30px',
                                            color: `${theme.colors.green}`,
                                            cursor: 'pointer'
                                        }}>Edit!</EditIcon>
                                    </Link>
                                </Item>
                            )
                        )
                    }
                })}
            </List>
        </Container >
    )
}