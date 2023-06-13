import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const Jaylin = [
    {
        value: 'true',
        label: '✅',
    },
    {
        value: 'false',
        label: '❌',
    }
];

const statues = [
    {
        value: 'new',
        label: 'new',
    },
    {
        value: 'contacted',
        label: 'contacted',
    },
    {
        value: 'application sent',
        label: 'application sent',
    },
    {
        value: 'viewing scheduled',
        label: 'viewing scheduled',
    },
];

export default function Form() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2 },
                }}
                autoComplete="off"
            >
                <TextField required id="standard-basic" label="Address" variant="standard" style={{ width: "85vw" }} />
                <TextField
                    required
                    id="standard-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                    required
                    id="standard-number"
                    label="Bedrooms"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                    required
                    id="standard-number"
                    label="Bathrooms"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                    id="standard-number"
                    label="Sqft"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Notes"
                    multiline
                    maxRows={4}
                    variant="standard"
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Jaylin"
                    defaultValue="true"
                    helperText="Is Jaylin allowed?"
                    variant="standard"
                >
                    {Jaylin.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Status"
                    defaultValue="new"
                    helperText="What's the status on this one?"
                    variant="standard"
                >
                    {statues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
        </Box>
    );
}