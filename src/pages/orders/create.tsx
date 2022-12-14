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


const CreateOrder: FC<{}> = () => {
    const router = useRouter()

    const onSubmit = async (order: Order) => {
        try {
            await client.createOrder(order)
            toast.success('Ordem criada')
            setTimeout(() => router.push('/'), 500)
        } catch (error) {
            toast.error('Erro tentando criar uma nova ordem')
            console.log('[order] - error')
        }
    }

    return (
        <Layout>
            <ToastContainer />
            <PageTitle title='Formulário' subtitle='novos pedidos e edição' />
            <OrderForm onSubmit={onSubmit} />
        </Layout>
    )
}

export default CreateOrder