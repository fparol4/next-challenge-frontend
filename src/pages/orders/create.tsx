import { FC } from 'react'

import { PageTitle } from '@/components/shared/page-title'
import { Layout } from '@/components/shared/layout'
import { OrderForm } from '@/components/orders/form'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from 'next/router'

import {
    client,
    Order,
} from '@/clients/api.client'


const CreateOrder: FC<{}> = () => {
    const onSubmit = async (order: Order) => {
        client.createOrder(order)
            .then(() => toast.success('Ordem criada'))
            .catch(error => console.log(error))
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