import {ComponentStory, ComponentMeta} from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes/light';
import HeadBar from './HeadBar';

export default{
    title: 'Components/HeadBar',
    component: HeadBar,
} as ComponentMeta<typeof HeadBar>;


const Template = (args: unknown): JSX.Element => 
<ThemeProvider theme={light}>
    <MemoryRouter>
        <HeadBar />
    </MemoryRouter>
</ThemeProvider>;

export const Heading: ComponentStory<typeof HeadBar> = Template
