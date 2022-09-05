import { Order } from "@/clients/api.client"
import { FC } from "react"
import styled from "styled-components"

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { DesktopDatePicker, LocalizationProvider as MUILocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material"
import { Button, EmptyButton } from "@/components/shared/button";
import Link from "next/link";

import {
    ButtonsContainer,
    DateContainer,
    Form,
    InputContainer,
    Label,
    Line
} from './styles'

interface OrderForm {
    order?: Partial<Order>
    onSubmit: (order: Order) => any
}

interface Form {
    protocol: string
    presentant: string
    type: string
    entry_date: string
    due_date: string
}

const schema = yup.object({
    protocol: yup.string().required(),
    presentant: yup.string().required(),
    type: yup.string().required(),
    entry_date: yup.date().required(),
    due_date: yup.date().required()
})

const resolver = yupResolver(schema)

export const OrderForm: FC<OrderForm> = (props) => {
    const { order, onSubmit } = props
    const today = new Date().toDateString()

    const {
        register,
        formState: { errors },
        handleSubmit,
        control
    } = useForm<Form>({
        defaultValues: {
            protocol: order?.protocol,
            type: order?.type,
            presentant: order?.presentant,
            entry_date: order?.entry_date || today,
            due_date: order?.due_date || today
        },
        resolver: resolver
    })

    return (
        <Form>
            <InputContainer>
                <span>Protocolo</span>
                <TextField
                    {...register('protocol')}
                    error={!!errors.protocol}
                />
            </InputContainer>

            <DateContainer>
                <MUILocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="date-box">
                        <span>Data de entrada</span>
                        <Controller
                            name="entry_date"
                            control={control}
                            render={(props) => {
                                const { field } = props
                                return (
                                    <DesktopDatePicker
                                        inputFormat="DD/MM/YYYY"
                                        value={field.value}
                                        onChange={field.onChange}
                                        renderInput={(params) => <TextField {...params} />}
                                        className="date-picker"
                                    />
                                )
                            }}
                        />
                    </div>

                    <div className="date-box">
                        <span>Data de vencimento</span>
                        <Controller
                            name="due_date"
                            control={control}
                            render={(props) => {
                                const { field } = props
                                return (
                                    <DesktopDatePicker
                                        inputFormat="DD/MM/YYYY"
                                        value={field.value}
                                        onChange={field.onChange}
                                        renderInput={(params) => <TextField {...params} />}
                                        className="date-picker"
                                    />
                                )
                            }}
                        />
                    </div>
                </MUILocalizationProvider>
            </DateContainer>

            <InputContainer>
                <span>Apresentante</span>
                <TextField
                    {...register('presentant')}
                    error={!!errors.presentant}
                />
            </InputContainer>

            <InputContainer>
                <span>Tipo</span>
                <TextField
                    {...register('type')}
                    error={!!errors.type}
                />
            </InputContainer>

            <ButtonsContainer>
                <Link href="/">
                    <EmptyButton>
                        Cancelar
                    </EmptyButton>
                </Link>
                <Button
                    onClick={handleSubmit((data) => onSubmit(data))}
                >
                    Salvar
                </Button>
            </ButtonsContainer>
        </Form>
    )
}
