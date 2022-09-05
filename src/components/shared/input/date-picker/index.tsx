import { DesktopDatePicker, LocalizationProvider as MUILocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material"
import styled from 'styled-components'
import { FC } from "react";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    .date-picker {
        background-color: white;
    }
`

export const Label = styled.label`
    margin-left:2px;
    color: white; 
`

export const LocalizationProvider: FC<{ children: any }> = (props) => {
    const { children } = props
    return (
        <MUILocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
        </MUILocalizationProvider>
    )
}

export const DatePicker: FC<{
    date: string
    onChange: (date: string) => any
}> = (props) => {
    const { date, onChange } = props
    return (
        <Container>
            <Label>Data de entrada</Label>
            <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={date ? Date.parse(date) : new Date().toString()}
                onChange={date => onChange(date?.toString() as string)}
                renderInput={(params) => <TextField {...params} />}
                className="date-picker"
            />
        </Container>
    )
}
