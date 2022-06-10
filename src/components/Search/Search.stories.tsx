import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react'; 
import { Search } from "./Search";

export default {
    title: 'Components/Search',
    component: Search
} as ComponentMeta<typeof Search>;

export const Primary: ComponentStory<typeof Search> = () => <Search />;