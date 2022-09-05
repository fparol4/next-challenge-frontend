import { FC } from 'react'

import { PageTitle } from '@/components/shared/page-title'
import { Layout } from '@/components/shared/layout'

import { Button } from '@/components/shared/button'
import { OrdersList } from '@/components/orders/list'

import {
    client,
    Order,
} from '@/clients/api.client'
import Link from 'next/link'

interface Props {
    orders: Order[]
}

const ListOrders: FC<Props> = ({ orders }) => {
    return (
        <Layout>
            <PageTitle title='Pedidos' subtitle='últimos pedidos'>
                <Link href='/orders/create'>
                    <Button white>Novo pedido</Button>
                </Link>
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