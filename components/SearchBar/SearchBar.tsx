"use client"
import { InputAdornment, TextField } from '@mui/material'
import { KeyboardEventHandler, useRef } from 'react';
import SearchIcon from './SearchIcon';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSearch = () => {
        const inputValue = inputRef.current?.value;

        if (!inputValue) return;

        router.push(`/search/${inputValue}`);
    };

    const onSearchKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.code !== "Enter") return;
        handleSearch();
    };

    return (
        <TextField
            inputRef={inputRef}
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