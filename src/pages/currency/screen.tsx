import React, { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";
import { Currency } from '../../redux/reducers/currencies';

interface Props {
  currencies: Currency[],
}

const CurrencyScreen = (props: Props) => {
  const { currencies } = props;
  return <Fragment>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell>Country Name</TableCell>
            <TableCell>Currency Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Fragment>
};

export default CurrencyScreen;