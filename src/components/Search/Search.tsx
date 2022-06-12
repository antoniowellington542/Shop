import { SearchContainer, SearchInput, SearchLabel } from "./Search.style";
import {FiSearch} from 'react-icons/fi';
export const Search = () => {
    return(
        <SearchContainer>
            <SearchInput type="text" id="btn_search" />
            <SearchLabel htmlFor="bt_search">
                <FiSearch size={20} />
            </SearchLabel>
        </SearchContainer>
    )
};