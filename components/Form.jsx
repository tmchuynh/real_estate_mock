import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';

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

const status = [
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
        value: 'tour scheduled',
        label: 'tour scheduled',
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

export default function PropertyForm() {
    const router = useRouter();
    const [property, setProperty] = useState(initialProperty);



    const handleSubmit = (e) => {
        e.preventDefault();
        setProperty(initialProperty);
        router.push('/property');
    }

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2 },
                    margin: 'auto',
                }}
                autoComplete="off"
            >
                <TextField
                    required
                    id="address"
                    label="Address"
                    placeholder="2026 W Sago Palm Rd, Colton, CA 92324"
                    variant="standard"
                    style={{ width: "90%" }} />
                <TextField
                    required
                    id="price"
                    label="Price"
                    placeholder="1337"
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
                    placeholder="3"
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
                    placeholder="2"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                    id="sqft"
                    label="Sqft"
                    placeholder="1337"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <TextField
                    id="notes"
                    label="Notes"
                    placeholder="Walking distance to two parks"
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
                    {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br />
                <Fab variant="extended" type='submit' sx={{ margin: "1rem" }}>
                    <NavigationIcon sx={{ mr: 2 }} />
                    Create
                </Fab>
            </Box>
        </Box>
    );
}
