import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Theme from './material-theme'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator