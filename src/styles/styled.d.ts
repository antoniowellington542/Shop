import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        colors: {
            pink: string;
            red: string;
            blue: string;
            purple: string;
            sky_blue: string;
            pantone_purple: string;
            off_blue: string;
            navy_blue: string;
            off_navy_blue: string;
            off_purple: string;
            text_color: string;
        },
        font: {
            primary: string;
            secondary: string;
        }
    }
}