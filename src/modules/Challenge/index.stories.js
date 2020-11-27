import React from 'react'
import { storiesOf } from '@storybook/react';
import withProvider from '../withProvider';
import Index from './Index';
import Categories from './Categories';
import Top10 from './Top10';

storiesOf('Challenge', module)
    .add('Component', () => withProvider(Index)())
    .add('Categories', () => withProvider(Categories)())
    .add('Top10', () => withProvider(Top10)())