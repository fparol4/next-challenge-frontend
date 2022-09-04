import { FC } from 'react'

import { PageTitle } from '@/components/shared/page-title'
import { Layout } from '@/components/shared/layout'

import { Button } from '@/components/shared/buttons'
import { OrdersList } from '@/components/orders'

import {
    client,
    Order,
} from '@/clients/api.client'

interface Props {
    orders: Order[]
}

const ListOrders: FC<Props> = ({ orders }) => {
    return (
        <Layout>
            <PageTitle title='Pedidos' subtitle='últimos pedidos'>
                <Button white>Novo pedido</Button>
            </PageTitle>
            <OrdersList orders={orders} />
        </Layout>
    )
}

export async function getServerSideProps() {
    const orders = await client.getOrders()
    return { props: { orders } }
}

export default ListOrders