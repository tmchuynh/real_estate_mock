import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

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

const initialProperty = {
    address: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    notes: '',
    jaylin: 'false',
    status: 'new'
}

export default function Form() {
    const [property, setProperty] = useState(initialProperty);

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2 },
                    }}
                    autoComplete="off"
                >
                    <TextField required id="address" label="Address" variant="standard" style={{ width: "85vw" }} />
                    <TextField
                        required
                        id="price"
                        label="Price"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        required
                        id="bedrooms"
                        label="Bedrooms"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        required
                        id="bathrooms"
                        label="Bathrooms"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="sqft"
                        label="Sqft"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="notes"
                        label="Notes"
                        multiline
                        maxRows={4}
                        variant="standard"
                    />
                    <TextField
                        select
                        id="jaylin"
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
                        select
                        id="status"
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
                    <br/>
                    <Fab variant="extended" type='submit' sx={{margin: "1rem"}}>
                        <NavigationIcon sx={{ mr: 2 }} />
                        Create
                    </Fab>
                </Box>
            </Box>
        </form>
    );
}