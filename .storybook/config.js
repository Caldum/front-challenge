import { configure, addParameters, addDecorator } from '@storybook/react'
import { themes } from '@storybook/theming'
import theme from './theme'
import ThemeDecorator from "./ThemeDecorator"

const req = require.context('../src', true, /\.stories\.js$/)


addParameters({
  options: {
    theme: theme,
  },
});

addParameters({
  options: {
    theme: theme,
  },
});

addParameters({
  options: {
    theme: theme,
  },
});

function loadStories() {
  req.keys().forEach(fileName => req(fileName));
  addDecorator(ThemeDecorator)
}

addDecorator(ThemeDecorator)

configure(loadStories, module);
