import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import classes from "./OrderHistory.module.css";
const OrderHistory = () => {
  const orderedItem = useSelector((state) => state.cart.orderedList);
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#147662",
      color: "white",
      fontSize: "1.5rem",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  }));
  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "rgb(224 224 224)",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div className={classes.orderHistory}>
      <div className={classes.heading}> Your Order</div>
      {orderedItem ? (
        orderedItem.map((item1, i) => (
          <div className={classes.container} key={i}>
            <TableContainer component={Paper} aria-label="customized table">
              <Table sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" colSpan={3}>
                      Details
                    </StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell>Item Name</StyledTableCell>
                    <StyledTableCell align="right">Qty.</StyledTableCell>
                    <StyledTableCell align="right">
                      Price(1 Item)(₹)
                    </StyledTableCell>
                    <StyledTableCell align="right">SubTotal(₹)</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item1.item.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.quantity}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.price.toFixed(2)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.totalPrice.toFixed(2)}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  <StyledTableRow>
                    <StyledTableCell colSpan={3} align="right">
                      Total
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      ₹{item1.amount.toFixed(2)}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))
      ) : (
        <span>
          <h2> No item in the list</h2>
        </span>
      )}
    </div>
  );
};

export default OrderHistory;
