import {ComponentStory, ComponentMeta} from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes/light';
import HeadBar from './HeadBar';
export default{
    title: 'Components/HeadBar',
    component: HeadBar,
} as ComponentMeta<typeof HeadBar>;


export const Template: ComponentStory<typeof HeadBar> = (args) => 
    <ThemeProvider theme={light}>
        <HeadBar />
    </ThemeProvider>
