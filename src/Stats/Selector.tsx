import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

interface MySelectProps {
    options: string[];
    onChange: (selectedValue: string) => void;
}

const Selector: React.FC<MySelectProps> = ({ options, onChange }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newValue = event.target.value as string;
        setSelectedOption(newValue);
        onChange(newValue);
    };


    return (
        <FormControl>
            <Select
                value={selectedOption}

    onChange={handleSelectChange}
    displayEmpty
    inputProps={{ 'aria-label': 'Select an option' }}
>
    <MenuItem value="">Select an option</MenuItem>
    {options.map((option) => (
        <MenuItem key={option} value={option}>
        {option}
        </MenuItem>
    ))}
    </Select>
    </FormControl>
);
};

export default Selector;
