import * as React from "react";
import { useRouter } from "next/router";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "@/components/Navbar";
import { Container } from 'react-bootstrap'



export default function PropertyDetails() {
    const router = useRouter();
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar />
            <Container className="d-flex flex-column">
                <h1>{router.query.address}</h1>
                ${router.query.price}
                {router.query.rooms}
                {router.query.baths}
                {router.query.sqft}
                {router.query.isJaylinFriendly}
                {router.query.status}
                {router.query.url}
            </Container>
        </Box>
    )
}