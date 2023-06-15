import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import CreateIcon from '@mui/icons-material/Create';
import Fab from '@mui/material/Fab';
import theme from '@/styles/theme';

import Link from 'next/link';
import InfoIcon from '@mui/icons-material/Info';

export default function ReorderDemo() {
    const ProductService = {
        getProductsData() {
            return [
                {
                    id: '1000',
                    address: '123 Main, Suite 330, Boston, MA 02111-1307',
                    price: 1323,
                    baths: 2,
                    beds: 3,
                    sqft: 1523,
                    isJaylinFriendly: 'true',
                    status: 'new',
                    url: 'https://www.redfin.com/CA/Orange/2759-N-Chauncey-Ln-92867/home/4325595',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1001',
                    address: '456 Elm St, Apt 205, New York, NY 10001',
                    price: 2200,
                    baths: 1,
                    beds: 1,
                    sqft: 1000,
                    isJaylinFriendly: 'false',
                    status: 'contacted',
                    url: 'https://www.redfin.com/NY/New-York/456-Elm-St-10001/home/1234567',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1002',
                    address: '789 Oak Ave, San Francisco, CA 94110',
                    price: 3500,
                    baths: 3,
                    beds: 2,
                    sqft: 2000,
                    isJaylinFriendly: 'true',
                    status: 'viewing scheduled',
                    url: 'https://www.redfin.com/CA/San-Francisco/789-Oak-Ave-94110/home/9876543',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1003',
                    address: '321 Elm St, Apt 105, New York, NY 10001',
                    price: 1800,
                    beds: 1,
                    baths: 1,
                    sqft: 600,
                    isJaylinFriendly: 'true',
                    status: 'new',
                    url: 'https://www.redfin.com/NY/New-York/321-Elm-St-10001/home/9876543',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1004',
                    address: '987 Oakwood Blvd, Los Angeles, CA 90001',
                    price: 2500,
                    beds: 3,
                    baths: 2,
                    sqft: 1200,
                    isJaylinFriendly: 'false',
                    status: 'application sent',
                    url: 'https://www.redfin.com/CA/Los-Angeles/987-Oakwood-Blvd-90001/home/2468135',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1005',
                    address: '456 Pine St, Seattle, WA 98101',
                    price: 3000,
                    beds: 2,
                    baths: 2,
                    sqft: 1000,
                    isJaylinFriendly: 'true',
                    status: 'viewing scheduled',
                    url: 'https://www.redfin.com/WA/Seattle/456-Pine-St-98101/home/5432167',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1006',
                    address: '789 Main St, Apt 401, Chicago, IL 60601',
                    price: 1900,
                    beds: 1,
                    baths: 1,
                    sqft: 800,
                    isJaylinFriendly: 'true',
                    status: 'new',
                    url: 'https://www.redfin.com/IL/Chicago/789-Main-St-60601/home/7654321',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1007',
                    address: '123 Elmwood Ave, San Francisco, CA 94110',
                    price: 3800,
                    beds: 3,
                    baths: 2,
                    sqft: 1500,
                    isJaylinFriendly: 'true',
                    status: 'contacted',
                    url: 'https://www.redfin.com/CA/San-Francisco/123-Elmwood-Ave-94110/home/8765432',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1008',
                    address: '456 Oak St, New York, NY 10001',
                    price: 2800,
                    beds: 2,
                    baths: 1,
                    sqft: 900,
                    isJaylinFriendly: 'false',
                    status: 'application sent',
                    url: 'https://www.redfin.com/NY/New-York/456-Oak-St-10001/home/6543219',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1009',
                    address: '789 Maple Ave, Seattle, WA 98101',
                    price: 3500,
                    beds: 3,
                    baths: 2,
                    sqft: 1300,
                    isJaylinFriendly: 'true',
                    status: 'new',
                    url: 'https://www.redfin.com/WA/Seattle/789-Maple-Ave-98101/home/9876543',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1100',
                    address: '123 Maple Rd, Chicago, IL 60601',
                    price: 1800,
                    baths: 1,
                    beds: 1,
                    sqft: 800,
                    isJaylinFriendly: 'false',
                    status: 'application sent',
                    url: 'https://www.redfin.com/IL/Chicago/123-Maple-Rd-60601/home/2468135',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
                {
                    id: '1199',
                    address: '567 Pine St, Seattle, WA 98101',
                    price: 2500,
                    beds: 2,
                    baths: 2,
                    sqft: 1100,
                    isJaylinFriendly: 'true',
                    status: 'new',
                    url: 'https://www.redfin.com/WA/Seattle/567-Pine-St-98101/home/9876543',
                    info: <Link
                        href={{
                            pathname: "/property",
                            query: {
                                address: columns.address,
                                rooms: columns.rooms,
                                baths: columns.baths,
                                sqft: columns.sqft,
                                isJaylinFriendly: columns.isJaylinFriendly,
                                status: columns.status,
                                url: columns.url,
                                price: price,
                            },
                        }}
                    > <InfoIcon /> </Link>
                },
            ]
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },

        getProductsSmall() {
            return Promise.resolve(this.getProductsData().slice(0, 10));
        },

        
    };

    const columns = [
        { field: 'address', header: 'Address' },
        { field: 'price', header: 'Price' },
        { field: 'baths', header: 'Baths' },
        { field: 'beds', header: 'Beds' },
        { field: 'sqft', header: 'Sqft' },
        { field: 'status', header: 'Status' },
        { field: 'isJaylinFriendy', header: 'Jaylin' },
        { field: 'info', header: 'Info' }
    ];

    function getProductsData() {
        return [
            {
                id: '1000',
                address: '123 Main, Suite 330, Boston, MA 02111-1307',
                price: 1323,
                baths: 2,
                beds: 3,
                sqft: 1523,
                isJaylinFriendly: 'true',
                status: 'new',
                url: 'https://www.redfin.com/CA/Orange/2759-N-Chauncey-Ln-92867/home/4325595',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1001',
                address: '456 Elm St, Apt 205, New York, NY 10001',
                price: 2200,
                baths: 1,
                beds: 1,
                sqft: 1000,
                isJaylinFriendly: 'false',
                status: 'contacted',
                url: 'https://www.redfin.com/NY/New-York/456-Elm-St-10001/home/1234567',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1002',
                address: '789 Oak Ave, San Francisco, CA 94110',
                price: 3500,
                baths: 3,
                beds: 2,
                sqft: 2000,
                isJaylinFriendly: 'true',
                status: 'viewing scheduled',
                url: 'https://www.redfin.com/CA/San-Francisco/789-Oak-Ave-94110/home/9876543',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1003',
                address: '321 Elm St, Apt 105, New York, NY 10001',
                price: 1800,
                beds: 1,
                baths: 1,
                sqft: 600,
                isJaylinFriendly: 'true',
                status: 'new',
                url: 'https://www.redfin.com/NY/New-York/321-Elm-St-10001/home/9876543',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1004',
                address: '987 Oakwood Blvd, Los Angeles, CA 90001',
                price: 2500,
                beds: 3,
                baths: 2,
                sqft: 1200,
                isJaylinFriendly: 'false',
                status: 'application sent',
                url: 'https://www.redfin.com/CA/Los-Angeles/987-Oakwood-Blvd-90001/home/2468135',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1005',
                address: '456 Pine St, Seattle, WA 98101',
                price: 3000,
                beds: 2,
                baths: 2,
                sqft: 1000,
                isJaylinFriendly: 'true',
                status: 'viewing scheduled',
                url: 'https://www.redfin.com/WA/Seattle/456-Pine-St-98101/home/5432167',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1006',
                address: '789 Main St, Apt 401, Chicago, IL 60601',
                price: 1900,
                beds: 1,
                baths: 1,
                sqft: 800,
                isJaylinFriendly: 'true',
                status: 'new',
                url: 'https://www.redfin.com/IL/Chicago/789-Main-St-60601/home/7654321',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1007',
                address: '123 Elmwood Ave, San Francisco, CA 94110',
                price: 3800,
                beds: 3,
                baths: 2,
                sqft: 1500,
                isJaylinFriendly: 'true',
                status: 'contacted',
                url: 'https://www.redfin.com/CA/San-Francisco/123-Elmwood-Ave-94110/home/8765432',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1008',
                address: '456 Oak St, New York, NY 10001',
                price: 2800,
                beds: 2,
                baths: 1,
                sqft: 900,
                isJaylinFriendly: 'false',
                status: 'application sent',
                url: 'https://www.redfin.com/NY/New-York/456-Oak-St-10001/home/6543219',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1009',
                address: '789 Maple Ave, Seattle, WA 98101',
                price: 3500,
                beds: 3,
                baths: 2,
                sqft: 1300,
                isJaylinFriendly: 'true',
                status: 'new',
                url: 'https://www.redfin.com/WA/Seattle/789-Maple-Ave-98101/home/9876543',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1100',
                address: '123 Maple Rd, Chicago, IL 60601',
                price: 1800,
                baths: 1,
                beds: 1,
                sqft: 800,
                isJaylinFriendly: 'false',
                status: 'application sent',
                url: 'https://www.redfin.com/IL/Chicago/123-Maple-Rd-60601/home/2468135',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
            {
                id: '1199',
                address: '567 Pine St, Seattle, WA 98101',
                price: 2500,
                beds: 2,
                baths: 2,
                sqft: 1100,
                isJaylinFriendly: 'true',
                status: 'new',
                url: 'https://www.redfin.com/WA/Seattle/567-Pine-St-98101/home/9876543',
                info: <Link
                    href={{
                        pathname: "/property",
                        query: {
                            address: columns.address,
                            rooms: columns.rooms,
                            baths: columns.baths,
                            sqft: columns.sqft,
                            isJaylinFriendly: columns.isJaylinFriendly,
                            status: columns.status,
                            url: columns.url,
                            price: price,
                        },
                    }}
                > <InfoIcon /> </Link>
            },
        ]
    }

    function getProducts() {
        return Promise.resolve(getProductsData());
    }




    const [products, setProducts] = useState([]);
    const [visibleColumns, setVisibleColumns] = useState(columns);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} optionLabel="header" onChange={onColumnToggle} className="w-full sm:w-20rem" display="chip" />;

    function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign +
                (j ? i.substr(0, j) + thousands : '') +
                i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    };

    const price = formatMoney(columns.price);

    return (
        <div className="enhancedTable" sx={{ width: '80vw' }}>
            <DataTable value={products} header={header} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginator reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ width: '80vw' }}>
                <Column rowReorder style={{ width: '3rem' }} />
                <div className="d-flex">
                    <Fab variant="extended" type='button' href="/property/new" sx={{ margin: "1rem" }} style={{ backgroundColor: theme.palette.primary.light }}>
                        <CreateIcon sx={{ mr: 2 }} />
                        New Property
                    </Fab>
                </div>
                {visibleColumns.map((col) => (
                    <Column key={col.field} sortable field={col.field} header={col.header} />
                ))}
            </DataTable>
            <div className="d-flex">
                <Fab variant="extended" type='button' href="/property/new" sx={{ margin: "1rem" }} style={{ backgroundColor: theme.palette.primary.light }}>
                    <CreateIcon sx={{ mr: 2 }} />
                    New Property
                </Fab>
            </div>
        </div>
    );
}
