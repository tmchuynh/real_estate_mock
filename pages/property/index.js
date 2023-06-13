import * as React from "react";
import { useRouter } from "next/router";

export default function PropertyDetails() {
    const router = useRouter();
    return (
        <>
            <h1>TESTING</h1>
            <>
            {router.query.address}
            {router.query.price}
            {router.query.rooms}
            {router.query.baths}
            {router.query.sqft}
            {router.query.isJaylinFriendly}
            {router.query.status}
            </>
        </>
    )

}