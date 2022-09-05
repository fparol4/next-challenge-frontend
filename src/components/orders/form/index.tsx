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
import Router from 'next/router'
import Link from "next/link";

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    flex-grow:1; 

    .input {
        background-color: white; 
        margin: 10px 0; 
    }
`

export const Label = styled.form`
    color: white; 
`

export const Line = styled.div`
    display: flex;
    margin: 10px 0; 

    & + .final {
        justify-content: end;

        button {
            color: white; 
        }

        button:nth-child(2) {
            margin-left: 4px; 
        }
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0; 
    
    span {
        color: white; 
        margin-bottom: 4px; 
    }

    input {
        background: white;
        height: 10px; 
    }
`

export const DateContainer = styled.div`
    display: flex; 
    span {
        color: white; 
    }
    .date-picker {
        background-color: white;
        width: 100%;  
    }

    .date-box:nth-child(2) {
        margin-left: 5px; 
    }
`

export const ButtonsContainer = styled.div`
    display: flex; 
    justify-content: end;
    
    button {
        font-weight: bold;
        color: white;
    }
    
    button:nth-child(2) {
        margin-left: 6px;
    }
`


interface OrderForm {
    order?: Partial<Order>
    onSubmit: (order: Order) => any
}

interface Form {
    avatar: string
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

    const today = new Date().toString()
    const redirect = (path: string) => {
        Router.push(path)
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        control
    } = useForm<Form>({
        defaultValues: {
            avatar: '',
            protocol: order?.protocol,
            type: order?.type,
            entry_date: today,
            due_date: today
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
