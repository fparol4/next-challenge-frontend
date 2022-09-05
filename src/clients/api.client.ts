import axios from "axios"
import { settings } from '@/settings/api.settings'

export interface Order {
    id?: number,
    avatar?: string,
    protocol: string,
    presentant: string,
    type: string,
    entry_date: string,
    due_date: string
}

export interface IOrder extends Partial<Order> { }

const DEFAULT_AVATAR_URL = 'https://gravatar.com/avatar/f6152e4acd50e543936441fc918b2606?s=400&d=robohash&r=x'

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

    const createOrder = async (order: Order): Promise<Order> => {
        order.avatar = DEFAULT_AVATAR_URL
        const { data: response } = await client.post('', order)
        const { content } = response
        return content
    }

    const updateOrder = async (id: number, order: IOrder): Promise<boolean> => {
        order.avatar = DEFAULT_AVATAR_URL
        const { data: response } = await client.put(`/${id}`, order)
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