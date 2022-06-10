import { FC } from "react";
import { SearchContainer, SearchInput, SearchLabel } from "./Search.style";

export const Search: FC = () => {
    return(
        <SearchContainer>
            <SearchInput
                type="text"
                id="btn_search"
            />
            <SearchLabel 
                htmlFor="bt_search"
            />
        </SearchContainer>
    )
}

