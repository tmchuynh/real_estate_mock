import React from "react";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "@/components/Navbar";
import { Container } from 'react-bootstrap';
import Link from "next/link";
import QuiltedImageList from "@/components/QuiltedImageList";

export default function PropertyDetails() {
    const router = useRouter();
    const src = router.query.url;
    // https://www.google.com/maps/place/2026+W+Sago+Palm+Rd,+Colton,+CA+92324/@34.0780618,-117.3678268,17z/data=!3m1!4b1!4m10!1m2!2m1!1s2026+W+Sago+Palm+Rd+Unit+N%2FA,+Colton,+CA+92324!3m6!1s0x80dcb2aab4d4eead:0x64cb18266707f127!8m2!3d34.0780619!4d-117.3629559!15sCi4yMDI2IFcgU2FnbyBQYWxtIFJkIFVuaXQgTi9BLCBDb2x0b24sIENBIDkyMzI0kgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11c24j5k9r?entry=ttu

    // https://www.google.com/maps/dir/2759+N+Chauncey+Ln,+Orange,+CA+92867-2081,+USA/2026+W+Sago+Palm+Rd,+Colton,+CA+92324/@33.9594863,-117.9187241,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80dcd0da9ed03d0b:0xb28650ba8fc5d471!2m2!1d-117.8190992!2d33.8352222!1m5!1m1!1s0x80dcb2aab4d4eead:0x64cb18266707f127!2m2!1d-117.3629559!2d34.0780619!3e0?entry=ttu
    // 44 mins - 42.8 miles
    // 45 min - 42.9 miles
    // 50 min - 49.1 miles

    // distance between two points
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const earthRadiusKm = 6371; // Earth's radius in kilometers
        const milesPerKm = 0.621371; // Conversion factor from kilometers to miles

        // Convert latitude and longitude from degrees to radians
        const latRad1 = (Math.PI / 180) * lat1;
        const lonRad1 = (Math.PI / 180) * lon1;
        const latRad2 = (Math.PI / 180) * lat2;
        const lonRad2 = (Math.PI / 180) * lon2;

        // Calculate the differences between the latitude and longitude of the two points
        const dLat = latRad2 - latRad1;
        const dLon = lonRad2 - lonRad1;

        // Apply the Haversine formula to calculate the distance
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distanceKm = earthRadiusKm * c;
        const distanceMiles = distanceKm * milesPerKm;

        return distanceMiles;
    }
    // 32.59 instead of 42.8
    const distance = calculateDistance(34.0780618, -117.3678268, 33.9594863, -117.9187241)

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar />
            <Container className="d-flex" style={{ width: '59vw' }}>
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
                        <p>{calculateDistance(34.0780618, -117.3678268, 33.9594863, -117.9187241)}</p>
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
