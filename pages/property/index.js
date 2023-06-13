import React from "react";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "@/components/Navbar";
import { Container } from 'react-bootstrap';
import Link from "next/link";

export default function PropertyDetails() {
    const router = useRouter();
    const src = router.query.url;
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar />
            <Container className="d-flex flex-column" style={{ width: '95vw' }}>
                <Grid container spacing={1}>
                    <Grid p xs={12}>
                        <Link href={src} ><b>{router.query.address}</b></Link>
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
                        <p>{router.query.status}</p>
                    </Grid>
                </Grid>
                {router.query.isJaylinFriendly === "true" ? (
                    <Chip label="Jaylin allowed" />
                ) : (
                    <Chip label="WHY IS THIS ONE SAVED 💢" variant="outlined" />
                )}
            </Container>
        </Box>
    )
}
