// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: '250px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}

const theme = extendTheme({ breakpoints })
export default theme