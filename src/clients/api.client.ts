import axios from "axios"
import { settings } from '@/settings/api.settings'

export interface Order {
    id?: number,
    protocol: string,
    presentant: string,
    type: string,
    avatar: string,
    entry_date: string,
    due_date: string
}

export interface IOrder extends Partial<Order> { }

const makeClient = () => {
    const baseurl = `${settings.API_HOST}/orders`
    const client = axios.create({ baseURL: baseurl })

    const getOrders = async (): Promise<Order[]> => {
        const { data: response } = await client.get('')
        const { content: orders } = response
        return orders
    }

    const getOrderById = async (id: string): Promise<Order> => {
        const { data: response } = await client.get(`/${id}`)
        const { content: order } = response
        return order
    }

    const createOrder = async (payload: Order): Promise<Order> => {
        const { data: response } = await client.post('', payload)
        const { content: order } = response
        return order
    }

    const updateOrder = async (payload: IOrder): Promise<boolean> => {
        const { data: response } = await client.put(`/${payload.id}`, payload)
        const { status } = response
        return status == 200
    }

    const deleteOrder = async (id: string): Promise<boolean> => {
        const { data: response } = await client.delete(`/${id}`)
        const { status } = response
        return status == 200
    }

    return {
        getOrders,
        getOrderById,
        createOrder,
        updateOrder,
        deleteOrder
    }
}

export const client = makeClient()