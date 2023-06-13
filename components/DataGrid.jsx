
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService'; import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import CreateIcon from '@mui/icons-material/Create';
import Fab from '@mui/material/Fab';
import theme from '@/styles/theme';

export default function ReorderDemo() {
    const columns = [
        { field: 'address', header: 'Address' },
        { field: 'price', header: 'Price' },
        { field: 'baths', header: 'Baths' },
        { field: 'beds', header: 'Beds' },
        { field: 'sqft', header: 'Sqft' },
        { field: 'status', header: 'Status' },
        { field: 'isJaylinFriendy', header: 'Jaylin' },
    ];

    const [products, setProducts] = useState([]);
    const [visibleColumns, setVisibleColumns] = useState(columns);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} optionLabel="header" onChange={onColumnToggle} className="w-full sm:w-20rem" display="chip" />;

    return (
        <div className="enhancedTable" sx={{ width: '80vw' }}>
            <DataTable value={products} header={header} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginator reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ width: '80vw' }}>
                <Column rowReorder style={{ width: '3rem' }} />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
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
