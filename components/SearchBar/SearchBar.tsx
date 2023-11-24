"use client"
import { InputAdornment, TextField } from '@mui/material'
import { KeyboardEventHandler } from 'react';
import SearchIcon from './SearchIcon';

const SearchBar = () => {
    const handleSearch = () => { /* we will implement the logic later */ };

    const onSearchKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.code !== "Enter") return;
        handleSearch();
    };

    return (
        <TextField
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon onClick={handleSearch} />
                    </InputAdornment>
                ),
            }}
            color="primary"
            variant="outlined"
            placeholder="Search..."
            size="small"
            onKeyDown={onSearchKeyDown}
        />
    )
}

export default SearchBar