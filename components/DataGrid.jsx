import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';

export default function CombinedTable() {
    const [products, setProducts] = useState([]);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const columns = [
        { field: 'code', header: 'Code', editor: textEditor, style: { width: '20%' } },
        { field: 'name', header: 'Name', editor: textEditor, style: { width: '20%' } },
        { field: 'inventoryStatus', header: 'Status', body: statusBodyTemplate, editor: statusEditor, style: { width: '20%' } },
        { field: 'price', header: 'Price', body: priceBodyTemplate, editor: priceEditor, style: { width: '20%' } },
    ];

    const dynamicColumns = columns.map((col) => {
        return <Column key={col.field} field={col.field} header={col.header} editor={col.editor} body={col.body} style={col.style} />;
    });

    return (
        <div className="card p-fluid">
            <DataTable
                value={products}
                editMode="row"
                dataKey="id"
                onRowEditComplete={onRowEditComplete}
                reorderableColumns
                reorderableRows
                onRowReorder={(e) => setProducts(e.value)}
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column rowReorder style={{ width: '3rem' }} />
                {dynamicColumns}
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
            </DataTable>
        </div>
    );
}
