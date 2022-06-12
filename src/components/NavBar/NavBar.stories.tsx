import {ComponentStory,  ComponentMeta} from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes/light';
import NavBar from './NavBar';

export default {
    title: 'Components/Navbar',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Template: ComponentStory<typeof NavBar> = () => 
    <ThemeProvider theme={light}>
        <MemoryRouter>
            <NavBar/>
        </MemoryRouter>
    </ThemeProvider>

