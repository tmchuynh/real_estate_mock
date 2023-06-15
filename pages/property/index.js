import React from "react";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "@/components/Navbar";
import { Container } from 'react-bootstrap';
import Link from "next/link";
import Fab from '@mui/material/Fab';
import theme from '@/styles/theme';
import ReplyIcon from '@mui/icons-material/Reply';

import QuiltedImageList from "@/components/QuiltedImageList";

export default function PropertyDetails() {
    const router = useRouter();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar />
            <Container className="d-flex" style={{ width: '59vw' }}>
                <Grid container spacing={1}>
                    <Grid p xs={12}>
                         <b>{router.query.address}</b>
                    </Grid>
                    <Grid p xs={2}>
                        <p>${router.query.price}</p>
                    </Grid>
                    <Grid p xs={2}>
                        <p>{router.query.rooms} Rooms</p>
                    </Grid>
                    <Grid p xs={2}>
                        <p>{router.query.baths} Baths</p>
                    </Grid>
                    <Grid p xs={2}>
                        <p>{router.query.sqft} sqft</p>
                    </Grid>
                    <Grid p xs={2}>
                        <p>Stuatus: {router.query.status}</p>
                    </Grid>
                    <Grid p xs={12}>
                        {router.query.isJaylinFriendly === "true" ? (
                            <Chip label="Jaylin allowed" />
                        ) : (
                            <Chip label="WHY IS THIS ONE SAVED 💢" variant="outlined" />
                        )}
                    </Grid>
                    <Grid p xs={12}>
                        <Fab variant="extended" type='button' href="/" style={{ backgroundColor: theme.palette.primary.light }}>
                            <ReplyIcon sx={{ mr: 2 }} />
                            Back
                        </Fab>
                    </Grid>
                </Grid>

            </Container>
            <QuiltedImageList data={itemData} />
        </Box>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];
