import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Styles } from '@/styles/global.styles'
import { theme } from '@/styles/themes/light.theme'

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Styles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
