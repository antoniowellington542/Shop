import {ComponentStory, ComponentMeta} from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import { light } from '../../styles/themes/light';
import { Button } from "./Button";

export default{
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => 
    <ThemeProvider theme={light}>
        <GlobalStyles />
        <Button {...args}/>
    </ThemeProvider>

export const Primary = Template.bind({});
Primary.args={
    primary: true,
    label: 'Clique',
    size: 'small'
}