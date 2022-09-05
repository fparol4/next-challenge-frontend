import { FC } from 'react'

import { PageTitle } from '@/components/shared/page-title'
import { Layout } from '@/components/shared/layout'
import { OrderForm } from '@/components/orders/form'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    client,
    Order,
} from '@/clients/api.client'


const CreateOrder: FC<{ order: Order }> = (props) => {
    const router = useRouter()
    const { order } = props
    const { id: orderId } = order;

    const onSubmit = async (order: Order) => {
        try {
            await client.updateOrder(orderId!, order)
            toast.success('Ordem atualizada')
            setTimeout(() => router.push('/'), 1000)
        } catch (error) {
            toast.error('Erro ao tentar atualizar uma ordem')
            console.log('[order] - error')
        }
    }

    return (
        <Layout>
            <ToastContainer />
            <PageTitle title='Formulário' subtitle='novos pedidos e edição' />
            <OrderForm order={order} onSubmit={onSubmit} />
        </Layout>
    )
}

export async function getServerSideProps(context: any) {
    const { query } = context
    const order = await client.getOrderById(query.id as string)
    return { props: { order } }
}


export default CreateOrder