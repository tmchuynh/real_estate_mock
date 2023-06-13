import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import InfoIcon from '@mui/icons-material/Info';
import theme from '@/styles/theme';
import Link from 'next/link';

// MOVE NOTES TO DETAILS PAGE
function createData(address, price, rooms, baths, sqft, isJaylinFriendly, status, url, notes, rating) {
  return {
    address,
    price,
    rooms,
    baths,
    sqft,
    isJaylinFriendly,
    status,
    url,
    notes,
    rating
  };
}

// new is default
// check box if app sent
// rank order --> pin some at the top of the table
// text box inside notes cell 
const rows = [
  createData('Cupcake', 56435, 305, 3.7, 67, true, "new", "/"),
  createData('Donut', 75647, 452, 25.0, 51, true, "contacted", "/"),
  createData('Eclair', 32544, 262, 16.0, 24, false, "application sent", "/"),
  createData('Frozen yoghurt', 6434, 159, 6.0, 24, true, "new", "/"),
  createData('Gingerbread', 34232, 356, 16.0, 49, true, "new", "/"),
  createData('Honeycomb', 45264, 408, 3.2, 87, false, "new", "/"),
  createData('Ice cream sandwich', 54624, 237, 9.0, 37, true, "new", "/"),
  createData('Jelly Bean', 87654, 375, 0.0, 94, true, "new", "/"),
  createData('KitKat', 567356, 518, 26.0, 65, true, "application sent", "/"),
  createData('Lollipop', 756845, 392, 0.2, 98, false, "new", "/"),
  createData('Marshmallow', 234573, 318, 0, 81, true, "contacted", "/"),
  createData('Nougat', 98645, 360, 19.0, 9, true, "contacted", "/"),
  createData('Oreo', 935673, 437, 18.0, 63, true, "viewing scheduled", "/"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address 🌍',
  },
  {
    id: 'price',
    numeric: false,
    disablePadding: false,
    label: 'Price 💲',
  },
  {
    id: 'rooms',
    numeric: true,
    disablePadding: false,
    label: 'Bedrooms 🛏️',
  },
  {
    id: 'baths',
    numeric: true,
    disablePadding: false,
    label: 'Bathrooms 🚿',
  },
  {
    id: 'sqft',
    numeric: true,
    disablePadding: false,
    label: 'Sqft 📐',
  },
  {
    id: 'isJaylinFriendly',
    numeric: false,
    disablePadding: false,
    label: 'Jaylin 🐶',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Status ✔️',
  },
  {
    id: 'rating',
    numeric: true,
    disablePadding: true,
    label: 'Rating ✔️',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id == 'address' ? 'left' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Notes</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(_props) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        bgcolor: (theme) =>
          alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
      }}
      style={{ backgroundColor: theme.palette.primary.main, color: "white" }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Saved Properties
      </Typography>
    </Toolbar>
  );
}

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

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );



  return (
    <Box className="enhancedTable" sx={{ width: '95vw' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row) => {
                const price = formatMoney(row.price)
                const [rating, setRating] = React.useState(0);

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.address}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                    >
                      {row.address}
                    </TableCell>
                    <TableCell align="center">${price}</TableCell>
                    <TableCell align="center">{row.rooms}</TableCell>
                    <TableCell align="center">{row.baths}</TableCell>
                    <TableCell align="center">{row.sqft}</TableCell>
                    <TableCell align="center">{row.isJaylinFriendly ? "✅"
                      : "❌"}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      {/* RATING IS NOT SORTING */}
                      <Rating
                        name="simple-controlled"
                        value={row.rating}
                        onChange={(event, newValue) => {
                          setRating(newValue);
                        }}
                      /> {rating}
                    </TableCell>
                    <TableCell align="center">{row.notes}</TableCell >
                    <TableCell align="center"><Link href={{
                      pathname: '/property',
                      query: { address: row.address, rooms: row.rooms, baths: row.baths, sqft: row.sqft, isJaylinFriendly: row.isJaylinFriendly, status: row.status, url: row.url, price: price }
                    }}><InfoIcon /></Link></TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}