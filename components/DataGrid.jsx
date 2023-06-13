
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService'; import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

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
        <div className="card">
            <DataTable value={products} header={header} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginator reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column rowReorder style={{ width: '3rem' }} />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
